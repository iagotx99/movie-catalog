// MovieDetails.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetails = () => {
  const { id } = useParams(); // Pega o ID do filme da URL
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=6356a73ae1b387d95ea3c5b492c876ee`);
        setMovie(response.data);
      } catch (err) {
        setError('Erro ao buscar detalhes do filme');
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!movie) return <p>Carregando...</p>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
      <p>{movie.overview}</p>
      <p>Data de Lançamento: {movie.release_date}</p>
      <p>Avaliação: {movie.vote_average}</p>
    </div>
  );
};

export default MovieDetails;
