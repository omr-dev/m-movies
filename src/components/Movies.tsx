import {useEffect, useRef, useState} from 'react';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSortDown} from '@fortawesome/free-solid-svg-icons';
import{faSortUp} from '@fortawesome/free-solid-svg-icons';
import {deleteMovie, getMovies, Movie} from '../services/fakeMovieService';


import PaginationBar from './PaginationBar';
import {GenreName} from '../services/fakeGenreService';
import MoviesTableHeader from './MoviesTableHeader';
import MoviesTableBody from './MoviesTableBody';
export enum SortColumn {title="title",genre="genre",stock="stock",rate="rate"}

type propsMovies = {
    activeGenre: GenreName|null;
    sortColumn:SortColumn;
    isAscSort:boolean;
    setIsAscSort:(newSortKind:boolean)=>void;
    setSortColumn:(newSortColumn:SortColumn)=>void;
}

export const Movies = ({activeGenre,sortColumn, setSortColumn,isAscSort,setIsAscSort}: propsMovies) => {
    const refGenreFirstUpdate = useRef(true);
    const refMoviesFirstUpdate = useRef(true);
    const [movies, setMovies] = useState<Movie[] | null>([...getMovies()]);
    const [filteredMovies, setFilteredMovies] = useState<Movie[] | null>(movies && [...movies]);

    const [activePage, setActivePage] = useState(1);
    const PAGE_SIZE = 4;



    useEffect(() => {

        if (!refGenreFirstUpdate.current && movies) {
            if(activeGenre){
                const newFilteredMovies=[...movies].filter(movie => movie.genre.name === activeGenre);
                setFilteredMovies(newFilteredMovies);
            }else{
                setFilteredMovies([...movies]);
            }
        }

        if (refGenreFirstUpdate.current) {
            refGenreFirstUpdate.current = false;
            return;
        }
    }, [activeGenre]);
    useEffect(() => {
        if (!refMoviesFirstUpdate.current && movies) {
            if(!activeGenre){
                setFilteredMovies([...movies]);
            }else{
                setFilteredMovies([...movies].filter(movie => movie.genre.name === activeGenre))
            }


        }
        if (refMoviesFirstUpdate.current) {
            refMoviesFirstUpdate.current = false;
            return;
        }
    }, [movies]);
useEffect(()=>{
    if(filteredMovies)
    setFilteredMovies(getSortedMovies(filteredMovies,sortColumn,isAscSort));

},[sortColumn,isAscSort])

    const handleDelete = (id: string) => {
        if (movies) {
            setMovies(deleteMovie({movies, id}));

        }


    };

    const handleLike = (id: string) => {
        if (movies) {
            const updatedMovies = [...movies].map(
                (movie) => {
                    if (movie._id === id) {
                        movie.isLiked = (!movie.isLiked);
                    }
                    return movie;
                });
            setMovies(updatedMovies);
        }
    };
    const getSortIcon=(colName:SortColumn)=>{
    if (colName!==sortColumn){
        return null;
    }else if(isAscSort){
        return <FontAwesomeIcon icon={faSortUp}/>;
    }else {
        return <FontAwesomeIcon icon={faSortDown}/>;

    }
    }

const handleSort=(newSortColumn:SortColumn)=>{
    if(newSortColumn===sortColumn){
        setIsAscSort(!isAscSort);
    }else{
        setIsAscSort(false);
    }
    setSortColumn(newSortColumn);


}

const getSortedMovies=(unsortedMovies:Movie[],sortingCol:SortColumn,isAscending:boolean)=>{
        let sortedMovies=[...unsortedMovies];
        if(isAscending){

            switch (sortingCol) {
                case  "title": {

                   sortedMovies= [...unsortedMovies].sort((a: Movie, b: Movie) =>
                        a.title.localeCompare(b.title));

                    break;
                }
                case "genre": {
                    sortedMovies= ([...unsortedMovies].sort((a: Movie, b: Movie) => a.genre.name.localeCompare(b.genre.name)));

                    break;
                }
                case "stock": {
                    sortedMovies= ([...unsortedMovies].sort((a: Movie, b: Movie) => a.numberInStock - b.numberInStock));

                    break;
                }
                case "rate": {
                    sortedMovies= ([...unsortedMovies].sort((a: Movie, b: Movie) => a.dailyRentalRate - b.dailyRentalRate));

                    break;
                }
                default: {
                    break
                }

            }
        }else{
            //DESCENDING SORTING
            switch (sortingCol) {
                case  "title": {

                    sortedMovies=[...unsortedMovies].sort((a: Movie, b: Movie) =>
                        b.title.localeCompare(a.title));

                    break;
                }
                case "genre": {
                    sortedMovies=[...unsortedMovies].sort((a: Movie, b: Movie) => b.genre.name.localeCompare(a.genre.name));

                    break;
                }
                case "stock": {
                    sortedMovies=[...unsortedMovies].sort((a: Movie, b: Movie) => b.numberInStock - a.numberInStock);

                    break;
                }
                case "rate": {
                    sortedMovies=[...unsortedMovies].sort((a: Movie, b: Movie) => b.dailyRentalRate - a.dailyRentalRate);

                    break;
                }
                default: {
                    break
                }

            }
        }
        return sortedMovies;


}
    return (
        <>
            <Alert key="info" variant={movies ? "info" : "danger"}>
                <h2>There are {movies ? movies.length : "no"} movies.</h2>

            </Alert>


            <Table striped hover>
                <MoviesTableHeader handleSort={handleSort} getSortIcon={getSortIcon}/>

                <MoviesTableBody filteredMovies={filteredMovies} activePage={activePage} PAGE_SIZE={PAGE_SIZE} handleDelete={handleDelete} handleLike={handleLike}/>
            </Table>
            {filteredMovies && <PaginationBar activePage={activePage} pageSize={PAGE_SIZE} itemsCount={filteredMovies?.length} setActivePage={setActivePage}/>}


        </>);


};
