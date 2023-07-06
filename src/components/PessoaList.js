import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PessoaList = () => {
  const [pessoas, setPessoas] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:8080/pessoas');
        setPessoas(response.data);
      } catch (error) {
        console.error('Erro ao carregar pessoas:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Lista de Pessoas</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Endereço</th>
            <th>Telefone</th>
            <th>Email</th>
            <th>CPF</th>
          </tr>
        </thead>
        <tbody>
          {pessoas.map((pessoa) => (
            <tr key={pessoa.id}>
              <td>{pessoa.id}</td>
              <td>{pessoa.nome}</td>
              <td>{`${pessoa.endereco.rua}, ${pessoa.endereco.cidade}, ${pessoa.endereco.estado}`}</td>
              <td>
                {pessoa.contatos.map((contato) => (
                  <div key={contato.telefone}>{contato.telefone}</div>
                ))}
              </td>
              <td>
                {pessoa.contatos.map((contato) => (
                  <div key={contato.telefone}>{contato.email}</div>
                ))}
              </td>
              <td>{pessoa.cpf}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PessoaList;

