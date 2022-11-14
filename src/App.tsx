
import './App.scss'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faCoffee} from '@fortawesome/free-solid-svg-icons';

import {Col, Container, Row} from 'react-bootstrap';

import {Movies} from './components/Movies';
import GenresList from './components/GenresList'


function App() {



  return (
    <div className="App">
<Container>
    <Row className="mt-5">
        <Col md={2}>
            <GenresList/>
        </Col>
        <Col>

            <Movies />
        </Col>
    </Row>



</Container>


    </div>
  )
}

export default App
