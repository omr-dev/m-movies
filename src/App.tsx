import './App.scss';
import { Container} from 'react-bootstrap';


import LayoutPage from './Pages/LayoutPage';
import MoviesPage from './Pages/MoviesPage';
import {Route, Routes} from 'react-router-dom';
import CustomersPage from './Pages/CustomersPage';
import RentalsPage from './Pages/RentalsPage';
import NoMatch from './Pages/NoMatch';
import MovieDetailsPage from './Pages/MovieDetailsPage';




function App() {


    return (
        <div className="App">



            <Container>
                <Routes>
                    <Route path="/" element={<LayoutPage/>}>
                        <Route index element={<MoviesPage/>}/>
                        <Route path="customers" element={<CustomersPage/>}/>
                        <Route path="rentals" element={<RentalsPage/>}/>
                        <Route path="movies/:movieID" element={<MovieDetailsPage/>}/>
                        <Route path="*" element={<NoMatch/>}/>
                    </Route>
                </Routes>




            </Container>


        </div>
    );
}

export default App;
