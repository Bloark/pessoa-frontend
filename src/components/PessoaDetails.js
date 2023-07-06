import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { useParams } from 'react-router-dom';

const PessoaDetails = () => {
  const [pessoa, setPessoa] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchPessoa = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/pessoas/${id}`);
        setPessoa(response.data);
      } catch (error) {
        console.error('Erro ao carregar detalhes da pessoa:', error);
      }
    };

    fetchPessoa();
  }, [id]);

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

export default PessoaDetails;
