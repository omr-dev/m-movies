import './App.scss';
import { Container} from 'react-bootstrap';


import NavbarComponent from './components/NavbarComponent';
import MoviesPage from './Pages/MoviesPage';



function App() {


    return (
        <div className="App">


            <NavbarComponent/>
            <Container>
                <MoviesPage />



            </Container>


        </div>
    );
}

export default App;
