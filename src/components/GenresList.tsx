import {ListGroup} from 'react-bootstrap';
import {getGenres} from '../services/fakeGenreService';

const GenresList=()=>{
    const genres=getGenres();
    return (<div>
        <ListGroup>
            <ListGroup.Item>All Genres</ListGroup.Item>
            {genres.map((genre,index)=>{
            return <ListGroup.Item key={index}>{genre.name}</ListGroup.Item>
            })}


        </ListGroup>
    </div>)
}
export default GenresList;