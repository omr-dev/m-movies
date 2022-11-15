import {ListGroup} from 'react-bootstrap';
import {GenreName, getGenres} from '../services/fakeGenreService';
type propsGenresList={
    activeGenre:GenreName|null;
    setActiveGenre:(genre:GenreName|null)=>void;
}

const GenresList=({activeGenre,setActiveGenre}:propsGenresList)=>{

    return (<div>
        <ListGroup>
            <ListGroup.Item active={activeGenre===null} onClick={()=>{setActiveGenre(null)}} style={{cursor:"pointer"}}>All Genres</ListGroup.Item>

            {getGenres().map((genre,index)=>{
            return <ListGroup.Item key={index} active={activeGenre===genre.name} onClick={()=>{setActiveGenre(genre.name)}} style={{cursor:"pointer"}}>{genre.name}</ListGroup.Item>
            })}


        </ListGroup>
    </div>)
}
export default GenresList;