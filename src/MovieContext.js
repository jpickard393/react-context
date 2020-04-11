import React, { useState, createContext } from 'react';

//Export the Context object so it can be used in other components
export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([ // the next bit is the initial value for the state
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
        // The Provider is what allows consuming components to subscribe to context changes. It is the provider that allows the context to be consumed by other components.

        <MovieContext.Provider value={[movies, setMovies]}>  {/* value is the data we make available to consuming components */}
            {props.children}
            {/* props.children will render any children of the props we send into the component */}
        </MovieContext.Provider>
    );
}