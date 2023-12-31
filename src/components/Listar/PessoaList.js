import React, { useEffect, useState } from 'react';
import estilos from './PessoaList.module.scss';
import NavBar from '../NavBar/NavBar.js'
import { obterPessoas } from '../../api/pessoaApi';

const PessoaList = () => {
  const [pessoas, setPessoas] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const pessoasData = await obterPessoas();
        const pessoasOrdenadas = pessoasData.sort((a, b) => a.id - b.id);
        setPessoas(pessoasOrdenadas);
      } catch (error) {
        console.error('Erro ao carregar pessoas:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <NavBar />
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
                <td className={estilos['pessoa-list__telefone']}>
                  {pessoa.contatos
                    .filter((contato) => contato.tipo === 'TELEFONE')
                    .map((contato) => (
                      <div key={contato.id}>{contato.valor}</div>
                    ))}
                </td>
                <td className={estilos['pessoa-list__email']}>
                  {pessoa.contatos
                    .filter((contato) => contato.tipo === 'EMAIL')
                    .map((contato) => (
                      <div key={contato.id}>{contato.valor}</div>
                    ))}
                </td>
                <td className={estilos['pessoa-list__cpf']}>{pessoa.cpf}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PessoaList;


