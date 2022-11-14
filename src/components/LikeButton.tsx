import {faHeart as faHeartFull} from '@fortawesome/free-solid-svg-icons';
import {faHeart as faHeartEmpty} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Movie} from '../services/fakeMovieService';
type propsLikeButton={
    movie:Movie;
    handleLike:(id:string)=>void;
}
export const LikeButton=({movie, handleLike}:propsLikeButton)=>{
    return(<FontAwesomeIcon icon={movie.isLiked?faHeartFull:faHeartEmpty} onClick={()=>handleLike(movie._id)} style={{cursor:"pointer"}}/>);
}