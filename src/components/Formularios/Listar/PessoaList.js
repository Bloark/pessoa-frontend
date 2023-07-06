import React, { useEffect, useState } from 'react';
import axios from 'axios';
import estilos from './PessoaList.module.scss';

const PessoaList = () => {
  const [pessoas, setPessoas] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:8080/pessoas');
        const pessoasOrdenadas = response.data.sort((a, b) => a.id - b.id);
        setPessoas(pessoasOrdenadas);
      } catch (error) {
        console.error('Erro ao carregar pessoas:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className={estilos['pessoa-list']}>
      <h2 className={estilos['pessoa-list__title']}>Lista de Pessoas</h2>
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
            <tr className={estilos['pessoa-list__item']} key={pessoa.id}>
              <td>{pessoa.id}</td>
              <td className={estilos['pessoa-list__nome']}>{pessoa.nome}</td>
              <td className={estilos['pessoa-list__endereco']}>
                {`${pessoa.endereco.rua}, ${pessoa.endereco.cidade}, ${pessoa.endereco.estado}`}
              </td>
              <td className={estilos['pessoa-list__contatos']}>
                {pessoa.contatos.map((contato) => (
                  <div key={contato.telefone}>{contato.telefone}</div>
                ))}
              </td>
              <td className={estilos['pessoa-list__contatos']}>
                {pessoa.contatos.map((contato) => (
                  <div key={contato.telefone}>{contato.email}</div>
                ))}
              </td>
              <td className={estilos['pessoa-list__cpf']}>{pessoa.cpf}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PessoaList;

