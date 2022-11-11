import {FunctionComponent} from 'react';
import Table from 'react-bootstrap/Table';
import {Button} from 'react-bootstrap';
import {deleteMovie, getMovies} from '../services/fakeMovieService';
import {useEffect, useState} from 'react';
import Alert from 'react-bootstrap/Alert';

export const Movies=()=>{
    const [movies, setMovies]=useState([])

    useEffect(()=>{
        setMovies(getMovies);

    },[])


    const handleDelete=(id)=>{

        setMovies(deleteMovie({movies,id}));


    }
    return(
        <>
        <Alert key='info'  variant={movies?"info":"danger"} className="mt-5">
            <h2>There are {movies?movies.length:"no"} movies.</h2>
        </Alert>



                <Table striped hover>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {movies.map((movie) => {

                        return (<tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td><Button variant="danger" onClick={() => handleDelete(movie._id)}>Delete</Button></td>
                        </tr>);
                    })}


                    </tbody>
                </Table>

        </>);



}
