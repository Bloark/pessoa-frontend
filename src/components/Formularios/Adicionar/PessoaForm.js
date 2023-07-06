import React, { useState } from 'react';
import axios from 'axios';
import estilos from './PessoaForm.module.scss';

const PessoaForm = () => {
  const [nome, setNome] = useState('');
  const [rua, setRua] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/pessoas', {
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
      console.log('Pessoa adicionada:', response.data);
      // Limpar os campos após a adição da pessoa
      setNome('');
      setRua('');
      setCidade('');
      setEstado('');
      setTelefone('');
      setEmail('');
      setCpf('');
    } catch (error) {
      console.error('Erro ao adicionar pessoa:', error);
    }
  };

  return (
    <div className={estilos['pessoa-form']}>
      <h2 className={estilos['pessoa-form__title']}>Adicionar Pessoa</h2>
      <form className={estilos['pessoa-form__form']} onSubmit={handleSubmit}>
        <div className={estilos['pessoa-form__field']}>
          <label htmlFor="nome" className={estilos['pessoa-form__label']}>Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className={estilos['pessoa-form__input']}
          />
        </div>
        <div className={estilos['pessoa-form__field']}>
          <label htmlFor="rua" className={estilos['pessoa-form__label']}>Rua:</label>
          <input
            type="text"
            id="rua"
            value={rua}
            onChange={(e) => setRua(e.target.value)}
            className={estilos['pessoa-form__input']}
          />
        </div>
        <div className={estilos['pessoa-form__field']}>
          <label htmlFor="cidade" className={estilos['pessoa-form__label']}>Cidade:</label>
          <input
            type="text"
            id="cidade"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            className={estilos['pessoa-form__input']}
          />
        </div>
        <div className={estilos['pessoa-form__field']}>
          <label htmlFor="estado" className={estilos['pessoa-form__label']}>Estado:</label>
          <input
            type="text"
            id="estado"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
            className={estilos['pessoa-form__input']}
          />
        </div>
        <div className={estilos['pessoa-form__field']}>
          <label htmlFor="telefone" className={estilos['pessoa-form__label']}>Telefone:</label>
          <input
            type="text"
            id="telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            className={estilos['pessoa-form__input']}
          />
        </div>
        <div className={estilos['pessoa-form__field']}>
          <label htmlFor="email" className={estilos['pessoa-form__label']}>Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={estilos['pessoa-form__input']}
          />
        </div>
        <div className={estilos['pessoa-form__field']}>
          <label htmlFor="cpf" className={estilos['pessoa-form__label']}>CPF:</label>
          <input
            type="text"
            id="cpf"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            className={estilos['pessoa-form__input']}
          />
        </div>
        <button type="submit" className={estilos['pessoa-form__submit']}>Adicionar</button>
      </form>
    </div>
  );
  
};

export default PessoaForm;
