// MovieList.js

import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.length > 0 ? (
        movies.map(movie => (
          <Link to={`/movie/${movie.id}`} className="movie-card" key={movie.id}>
            <h2>{movie.title}</h2>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          </Link>
        ))
      ) : (
        <p>Nenhum filme encontrado.</p>
      )}
    </div>
  );
};

export default MovieList;
