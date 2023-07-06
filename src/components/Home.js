import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Página Inicial</h2>
      <p>Bem-vindo à página inicial do aplicativo.</p>
      <ul>
        <li>
          <Link to="/pessoas">Lista de Pessoas</Link>
        </li>
        <li>
          <Link to="/pessoas/1">Detalhes da Pessoa</Link>
        </li>
        <li>
          <Link to="/pessoas/novo">Formulário de Pessoa</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
