import { useNavigate, useParams} from 'react-router-dom';
import {Button} from 'react-bootstrap';

const MovieDetailsPage=()=>{
    const navigate=useNavigate();
    const {movieID}=useParams();
    return <><h1>Movie Id: {movieID}</h1>
        <div><Button variant="primary" onClick={()=>{return navigate("/")}}>Save</Button> </div></>
}
export default MovieDetailsPage;