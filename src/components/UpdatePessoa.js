import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdatePessoa = () => {
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [rua, setRua] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');

  useEffect(() => {
    if (id) {
      fetchPessoa();
    }
  }, [id]);

  const fetchPessoa = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/pessoas/${id}`);
      const pessoa = response.data;
      setNome(pessoa.nome);
      setRua(pessoa.endereco.rua);
      setCidade(pessoa.endereco.cidade);
      setEstado(pessoa.endereco.estado);
      setTelefone(pessoa.contatos[0].telefone);
      setEmail(pessoa.contatos[0].email);
      setCpf(pessoa.cpf);
    } catch (error) {
      console.error('Erro ao carregar detalhes da pessoa:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/pessoas/${id}`, {
        nome,
        endereco: {
          rua,
          cidade,
          estado,
        },
        contatos: [
          {
            telefone,
            email,
          },
        ],
        cpf,
      });
      console.log('Pessoa atualizada com sucesso!');
      // Redirecionar ou atualizar a lista de pessoas após a atualização bem-sucedida
    } catch (error) {
      console.error('Erro ao atualizar pessoa:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/pessoas/${id}`);
      console.log('Pessoa deletada com sucesso!');
      // Redirecionar ou atualizar a lista de pessoas após a exclusão bem-sucedida
    } catch (error) {
      console.error('Erro ao deletar pessoa:', error);
    }
  };

  return (
    <div>
      <h2>Atualizar Pessoa</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="id">ID:</label>
          <input
            type="text"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <button type="button" onClick={fetchPessoa}>Buscar</button>
        </div>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="rua">Rua:</label>
          <input
            type="text"
            id="rua"
            value={rua}
            onChange={(e) => setRua(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="cidade">Cidade:</label>
          <input
            type="text"
            id="cidade"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="estado">Estado:</label>
          <input
            type="text"
            id="estado"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="telefone">Telefone:</label>
          <input
            type="text"
            id="telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="cpf">CPF:</label>
          <input
            type="text"
            id="cpf"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
        </div>
        <button type="submit">Atualizar</button>
        <button type="button" onClick={handleDelete}>Deletar</button>
      </form>
    </div>
  );
};

export default UpdatePessoa;
