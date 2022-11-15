import {Alert} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const NoMatch=()=> {
    return <Alert variant="danger">Page not found! <Link to="/">Home</Link></Alert>;
}
export default NoMatch;