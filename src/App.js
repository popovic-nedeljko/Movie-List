import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [movies, setMovies] = useState(data);

  return (
    <main>
      <section className='container'>
        <h2>{movies.length} movies on your list</h2>
        <List movies={movies} setMovies={setMovies} />
        <button onClick={() => setMovies([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;
