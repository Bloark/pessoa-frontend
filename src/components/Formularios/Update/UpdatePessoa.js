import React, { useState, useEffect } from 'react';
import axios from 'axios';
import estilos from './Update.module.scss';
import Alerta from '../../Alerta/Alerta';


const UpdatePessoa = () => {
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [rua, setRua] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [exibirAlerta, setExibirAlerta] = useState(false);
  const [tipoAlerta, setTipoAlerta] = useState('');
  const [mensagemSucesso, setMensagemSucesso] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');

 

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
      setTelefone(pessoa.contatos.find(contato => contato.tipo === 'TELEFONE').valor);
      setEmail(pessoa.contatos.find(contato => contato.tipo === 'EMAIL').valor);
      setCpf(pessoa.cpf);
      // Exibir o alerta de sucesso
      setExibirAlerta(true);
      setTipoAlerta('sucesso');
      setMensagemSucesso('Pessoa Encontrada');
      
    } catch (error) {
       // Exibir o alerta de Erro
       setExibirAlerta(true);
       setTipoAlerta('erro');
       setMensagemErro('Erro ao buscar Pessoa');
 
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
            tipo: 'TELEFONE',
            valor: telefone,
          },
          {
            tipo: 'EMAIL',
            valor: email,
          },
        ],
        cpf,
      });

      // Exibir o alerta de sucesso
      setExibirAlerta(true);
      setTipoAlerta('sucesso');
      setMensagemSucesso('Pessoa atualizada com sucesso!');
   
     
      console.log('Pessoa atualizada com sucesso!');
      // Redirecionar ou atualizar a lista de pessoas após a atualização bem-sucedida
    } catch (error) {

      // Exibir o alerta de Erro
      setExibirAlerta(true);
      setTipoAlerta('erro');
      setMensagemErro('Erro ao atualizar pessoa');


      console.error('Erro ao atualizar pessoa:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/pessoas/${id}`);
      // Exibir o alerta de sucesso       
      setExibirAlerta(true);
      setTipoAlerta('sucesso');
      setMensagemSucesso('Pessoa deletada com sucesso!');   
           
      console.log('Pessoa deletada com sucesso!');
      // Redirecionar ou atualizar a lista de pessoas após a exclusão bem-sucedida
    } catch (error) {
      // Exibir o alerta de Erro
      setExibirAlerta(true);
      setTipoAlerta('erro');
      setMensagemErro('Erro ao deletar pessoa');

      console.error('Erro ao deletar pessoa:', error);
    }
  };

  return (
    <div className={estilos["update-pessoa"]}>
      <h2 className={estilos["update-pessoa__title"]}>Atualizar Pessoa</h2>
      {exibirAlerta && <Alerta tipo={tipoAlerta} mensagem={tipoAlerta === 'sucesso' ? mensagemSucesso : mensagemErro} />}

      <form className={estilos["update-pessoa__form"]} onSubmit={handleSubmit}>
        <div className={estilos["update-pessoa__field"]}>
          <label htmlFor="id" className={estilos["update-pessoa__label"]}>ID:</label>
          <input
            type="text"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className={estilos["update-pessoa__input"]}
          />
          <button type="button" onClick={fetchPessoa} className={estilos["update-pessoa__button"]}>Buscar</button>
        </div>
        <div className={estilos["update-pessoa__field"]}>
          <label htmlFor="nome" className={estilos["update-pessoa__label"]}>Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className={estilos["update-pessoa__input"]}
          />
        </div>
        <div className={estilos["update-pessoa__field"]}>
          <label htmlFor="rua" className={estilos["update-pessoa__label"]}>Rua:</label>
          <input
            type="text"
            id="rua"
            value={rua}
            onChange={(e) => setRua(e.target.value)}
            className={estilos["update-pessoa__input"]}
          />
        </div>
        <div className={estilos["update-pessoa__field"]}>
          <label htmlFor="cidade" className={estilos["update-pessoa__label"]}>Cidade:</label>
          <input
            type="text"
            id="cidade"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            className={estilos["update-pessoa__input"]}
          />
        </div>
        <div className={estilos["update-pessoa__field"]}>
          <label htmlFor="estado" className={estilos["update-pessoa__label"]}>Estado:</label>
         <input
            type="text"
            id="estado"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
            className={estilos["update-pessoa__input"]}
          />
        </div>
        <div className={estilos["update-pessoa__field"]}>
          <label htmlFor="telefone" className={estilos["update-pessoa__label"]}>Telefone:</label>
          <input
            type="text"
            id="telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            className={estilos["update-pessoa__input"]}
          />
        </div>
        <div className={estilos["update-pessoa__field"]}>
          <label htmlFor="email" className={estilos["update-pessoa__label"]}>Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={estilos["update-pessoa__input"]}
          />
        </div>
        <div className={estilos["update-pessoa__field"]}>
          <label htmlFor="cpf" className={estilos["update-pessoa__label"]}>CPF:</label>
          <input
            type="text"
            id="cpf"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            className={estilos["update-pessoa__input"]}
          />
        </div>
        <button type="submit" className={estilos["update-pessoa__submit"]}>Atualizar</button>
        <button type="button" onClick={handleDelete} className={estilos["update-pessoa__submit"]}>Deletar</button>
      </form>
    </div>
  );
};

export default UpdatePessoa;
