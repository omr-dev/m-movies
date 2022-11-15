
export type Movie = {
    _id: string;
    title: string;
    genre: { _id: string, name: string };
    numberInStock: number;
    dailyRentalRate: number;
    publishDate?: string;
    isLiked?:boolean;
}
const movies: Movie[] = [
    {
        _id: "5b21ca3eeb7f6fbccd471815",
        title: "Terminator",
        genre: {_id: "5b21ca3eeb7f6fbccd471818", name: "Action"},
        numberInStock: 6,
        dailyRentalRate: 2.5,
        publishDate: "2018-01-03T19:04:28.809Z",
        isLiked:true    },
    {
        _id: "5b21ca3eeb7f6fbccd471816",
        title: "Die Hard",
        genre: {_id: "5b21ca3eeb7f6fbccd471818", name: "Action"},
        numberInStock: 5,
        dailyRentalRate: 2.5
    },
    {
        _id: "5b21ca3eeb7f6fbccd471817",
        title: "Get Out",
        genre: {_id: "5b21ca3eeb7f6fbccd471820", name: "Thriller"},
        numberInStock: 8,
        dailyRentalRate: 3.5
    },
    {
        _id: "5b21ca3eeb7f6fbccd471819",
        title: "Trip to Italy",
        genre: {_id: "5b21ca3eeb7f6fbccd471814", name: "Comedy"},
        numberInStock: 7,
        dailyRentalRate: 3.5
    },
    {
        _id: "5b21ca3eeb7f6fbccd47181a",
        title: "Airplane",
        genre: {_id: "5b21ca3eeb7f6fbccd471814", name: "Comedy"},
        numberInStock: 7,
        dailyRentalRate: 3.5
    },
    {
        _id: "5b21ca3eeb7f6fbccd47181b",
        title: "Wedding Crashers",
        genre: {_id: "5b21ca3eeb7f6fbccd471814", name: "Comedy"},
        numberInStock: 7,
        dailyRentalRate: 3.5
    },
    {
        _id: "5b21ca3eeb7f6fbccd47181e",
        title: "Gone Girl",
        genre: {_id: "5b21ca3eeb7f6fbccd471820", name: "Thriller"},
        numberInStock: 7,
        dailyRentalRate: 4.5
    },
    {
        _id: "5b21ca3eeb7f6fbccd47181f",
        title: "The Sixth Sense",
        genre: {_id: "5b21ca3eeb7f6fbccd471820", name: "Thriller"},
        numberInStock: 4,
        dailyRentalRate: 3.5
    },
    {
        _id: "5b21ca3eeb7f6fbccd471821",
        title: "The Avengers",
        genre: {_id: "5b21ca3eeb7f6fbccd471818", name: "Action"},
        numberInStock: 7,
        dailyRentalRate: 3.5
    }
];

export function getMovies() {
    return movies;
}

// export function getMovie(id:string) {
//     return movies.find(m => m._id === id);
// }
//
// export function saveMovie(movie:Movie) {
//     let movieInDb = movies.find(m => m._id === movie._id) || {};
//     movieInDb.title = movie.title;
//     movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
//     movieInDb.numberInStock = movie.numberInStock;
//     movieInDb.dailyRentalRate = movie.dailyRentalRate;
//
//     if (!movieInDb._id) {
//         movieInDb._id = Date.now();
//         movies.push(movieInDb);
//     }
//
//     return movieInDb;
// }

export function deleteMovie({movies,id}:{movies:Movie[],id:string}):Movie[] {
    const updatedMovies=[...movies];
    let movieInDb = movies.find(m => m._id === id);
    if(movieInDb){
        updatedMovies.splice(movies.indexOf(movieInDb), 1);



    }
    return updatedMovies;
}
