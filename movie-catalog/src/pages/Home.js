// src/pages/Home.js

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Bem-vindo ao Catálogo de Filmes</h1>
      <p>Descubra os melhores filmes, explore nossas coleções e encontre suas próximas opções de entretenimento.</p>
      
      <h2>Filmes em Destaque</h2>
      <ul>
        <li>Deadpool</li>
        <li>The Crown</li>
        <li>Divertidamente 2</li>
      </ul>
      
      <h2>Explore Nossas Seções</h2>
      <nav>
        <ul>
          <li><Link to="/movies">Catálogo de Filmes</Link></li>
          <li><Link to="/about">Sobre Nós</Link></li>
        </ul>
      </nav>
      
      <h2>Novidades</h2>
      <p>Confira os últimos lançamentos que acabaram de chegar ao nosso catálogo!</p>
      
      <button>
        <Link to="/movies">Ver Catálogo Completo</Link>
      </button>
    </div>
  );
};

export default Home;
