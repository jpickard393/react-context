import React, { useState, useContext } from 'react';
import { MovieContext } from './MovieContext';

const AddMovie = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [movies, setMovies] = useContext(MovieContext);  //Allows us to get the movies from context

    const updateName = (e) => {
        setName(e.target.value);
    };
    const updatePrice = (e) => {
        setPrice(e.target.value);
    };
    const AddMovie = e => {
        e.preventDefault();

        //Take current movies and add a new one to the array
        setMovies(movies => [...movies, { name: name, price: price, id: movies.length + 1 }]);
    };

    return (
        <form onSubmit={AddMovie}>
            <input type='text' name="name" value={name} onChange={updateName} />
            <input type='text' name="price" value={price} onChange={updatePrice} />
            <button>Submit</button>
        </form>
    );

}

export default AddMovie;