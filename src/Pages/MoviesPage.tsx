import {Col, Row} from 'react-bootstrap';
import GenresList from '../components/GenresList';
import {Movies, SortColumn} from '../components/Movies';
import {GenreName} from '../services/fakeGenreService';
import {useState} from 'react';
// type PropsMoviePage={
//     activeGenre:GenreName|null;
//     setActiveGenre:(newGenre:GenreName | null)=>void;
//     sortColumn:SortColumn;
//     setSortColumn:(newSortColumn:SortColumn)=>void;
//     isAscSort:boolean;
//     setIsAscSort:(is:boolean)=>void;
// }
const MoviesPage=()=>{
    const [activeGenre, setActiveGenre] = useState<GenreName | null>(null);
    const [sortColumn, setSortColumn] = useState<SortColumn>(SortColumn.title);
    const [isAscSort, setIsAscSort] = useState(true);

    return( <Row className="mt-5">
        <Col md={2}>
            <GenresList activeGenre={activeGenre} setActiveGenre={setActiveGenre}/>
        </Col>
        <Col>

            <Movies activeGenre={activeGenre} sortColumn={sortColumn} setSortColumn={setSortColumn} isAscSort={isAscSort} setIsAscSort={setIsAscSort} />
        </Col>
    </Row>);
}
export default MoviesPage;