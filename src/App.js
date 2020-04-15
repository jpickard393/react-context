import React from 'react';
import MovieList from './MovieList';
import Nav from './Nav';
import { MovieProvider } from './MovieContext';  // Import the correct provider to use
import AddMovie from './AddMovie';

function App() {
  return (
    // By wrapping the components below in the Movie Provider we can pass state down to these components.
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>

  );
}

export default App;
