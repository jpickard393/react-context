import React from 'react';
import MovieList from './MovieList';
import Nav from './Nav';
import { MovieProvider } from './MovieContext';

function App() {
  return (
    // By wrapping the components below in the Movie Provider we can pass state down to these components.
    <MovieProvider>
      <div className="App">
        <Nav />
        <MovieList />
      </div>
    </MovieProvider>

  );
}

export default App;
