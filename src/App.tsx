
import './App.scss'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faCoffee} from '@fortawesome/free-solid-svg-icons';

import {Container} from 'react-bootstrap';

import {Movies} from './components/Movies.jsx';


function App() {


  return (
    <div className="App">
<Container>

    <Movies />


</Container>


    </div>
  )
}

export default App
