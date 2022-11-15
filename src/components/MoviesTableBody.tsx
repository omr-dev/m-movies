import {LikeButton} from './LikeButton';
import {Button} from 'react-bootstrap';
import {Movie} from '../services/fakeMovieService';
type PropsMoviesTableBody={
    filteredMovies:Movie[]|null;
    activePage:number;
    PAGE_SIZE:number;
    handleLike:(id:string)=>void;
    handleDelete:(id:string)=>void;
}

const MoviesTableBody=({filteredMovies, activePage,PAGE_SIZE,handleLike,handleDelete}:PropsMoviesTableBody)=>{
    return (<tbody>
    {filteredMovies?.map((movie, index) => {
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


    </tbody>);
}
export default MoviesTableBody;