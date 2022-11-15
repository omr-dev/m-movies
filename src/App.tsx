import './App.scss';
import {Col, Container, Row} from 'react-bootstrap';

import {Movies, SortColumn} from './components/Movies';
import GenresList from './components/GenresList';
import {useState} from 'react';
import {GenreName} from './services/fakeGenreService';
import NavbarComponent from './components/NavbarComponent';


function App() {
    const [activeGenre,setActiveGenre]=useState<GenreName|null>(null);
    const [sortColumn,setSortColumn]=useState<SortColumn>(SortColumn.title);
    const [isAscSort,setIsAscSort]=useState(true);



  return (
    <div className="App">



<NavbarComponent/>
<Container>
    <Row className="mt-5">
        <Col md={2}>
            <GenresList activeGenre={activeGenre} setActiveGenre={setActiveGenre}/>
        </Col>
        <Col>

            <Movies activeGenre={activeGenre} sortColumn={sortColumn} setSortColumn={setSortColumn} isAscSort={isAscSort} setIsAscSort={setIsAscSort} />
        </Col>
    </Row>



</Container>


    </div>
  )
}

export default App
