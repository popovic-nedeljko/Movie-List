import React from 'react';

const List = ({ movies, setMovies }) => {
  const removeMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  return (
    <>
      {movies.map((movie) => {
        const { id, name, year, image } = movie;

        return (
          <article key={id} className='movie'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{year}</p>
            </div>
            <button className='button' onClick={() => removeMovie(id)}>
              remove
            </button>
          </article>
        );
      })}
    </>
  );
};

export default List;
