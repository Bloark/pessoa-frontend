import React from 'react';
import { Link } from 'react-router-dom';
import estilos from './NavBar.module.scss';

const NavBar = () => {
  return (<nav className={estilos.Link}>
    <div>
      <h2>Página Inicial</h2>
      <p>Bem-vindo à página inicial do aplicativo.</p>
      <ul>
        <li>
          <Link to="/pessoas">Lista de Pessoas</Link>
        </li>       
        <li>
          <Link to="/pessoas/novo">Formulário de Pessoa</Link>
        </li>
        <li>
          <Link to="/pessoas/atualizar/novo">Atualizar Pessoa</Link> 
        </li>
      </ul>
    </div>
    </nav>
  );
};

export default NavBar;

