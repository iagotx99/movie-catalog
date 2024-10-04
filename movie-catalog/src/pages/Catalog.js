// src/pages/Catalog.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieList from '../components/MovieList';

const Catalog = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=6356a73ae1b387d95ea3c5b492c876ee');
        setMovies(response.data.results);
      } catch (err) {
        setError('Erro ao buscar filmes');
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Catálogo de Filmes</h1>
      {error && <p>{error}</p>}
      <MovieList movies={movies} />
    </div>
  );
};

export default Catalog;
