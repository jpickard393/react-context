import React, { useState, createContext } from 'react';

//Export the Context object so it can be used in other components
export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '£10',
            id: 1234
        },
        {
            name: 'Game of thrones',
            price: '£20',
            id: 1235
        },
        {
            name: 'Inception',
            price: '£21',
            id: 1236
        }
    ]);

    return (
        // Whatever is wrapped inside the Context.Provider is fed the state above by the MovieProvider
        <MovieContext.Provider value={[movies, setMovies]}>
            {/* props.children will render any children of the props we send into the component */}
            {props.children}
        </MovieContext.Provider>
    );
}