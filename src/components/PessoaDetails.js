import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const PessoaDetails = ({ match }) => {
  const [pessoa, setPessoa] = useState(null);

  useEffect(() => {
    const fetchPessoa = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/pessoas/${match.params.id}`);
        setPessoa(response.data);
      } catch (error) {
        console.error('Erro ao carregar detalhes da pessoa:', error);
      }
    };

    fetchPessoa();
  }, [match.params.id]);

  if (!pessoa) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h2>Detalhes da Pessoa</h2>
      <p>ID: {pessoa.id}</p>
      <p>Nome: {pessoa.nome}</p>
      <p>Idade: {pessoa.idade}</p>
      <p>Email: {pessoa.email}</p>
      {/* Outros campos da pessoa */}
    </div>
  );
};

PessoaDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default PessoaDetails;

