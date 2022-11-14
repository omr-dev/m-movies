import Table from 'react-bootstrap/Table';
import {Button} from 'react-bootstrap';
import {deleteMovie, getMovies, Movie} from '../services/fakeMovieService';
import {useEffect, useState} from 'react';
import Alert from 'react-bootstrap/Alert';


import {LikeButton} from './LikeButton';
import PaginationBar from './PaginationBar';

export const Movies = () => {
    const [movies, setMovies] = useState<Movie[] | null>(null);

    const [activePage, setActivePage] = useState(1);
    const PAGE_SIZE = 4;



    useEffect(() => {
        const moviesInDb = getMovies();

        setMovies(moviesInDb.map((movie) => {
            return {...movie, isLiked: false};
        }));

    }, []);

    useEffect(() => {
        console.log("activePage :", activePage);
    }, [activePage]);
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


    return (
        <>
            <Alert key="info" variant={movies ? "info" : "danger"}>
                <h2>There are {movies ? movies.length : "no"} movies.</h2>
            </Alert>


            <Table striped hover>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {movies?.map((movie, index) => {
                    if (index >= activePage * PAGE_SIZE || index <= (activePage - 1) * PAGE_SIZE - 1) {
                        return null;
                    }
                    return (<tr key={movie._id}>

                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td><LikeButton movie={movie} handleLike={handleLike}/></td>
                        <td>

                            <Button variant="danger" onClick={() => handleDelete(movie._id)}>Delete</Button></td>
                    </tr>);
                })}


                </tbody>
            </Table>
            {movies&&  <PaginationBar activePage={activePage} pageSize={PAGE_SIZE} itemsCount={movies?.length} setActivePage={setActivePage}/>}



        </>);


}
