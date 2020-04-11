import React, { useContext } from 'react';      // Allows this component to consume the value from the provider
import Movie from './Movie';
import { MovieContext } from './MovieContext';

const MovieList = () => {
    const [movies, setMovies] = useContext(MovieContext);

    return (
        <div>
            <h1>{movies.map(movie => (
                <Movie name={movie.name} price={movie.price} key={movie.id} />
            ))}</h1>
        </div>
    );
}

export default MovieList;