import axios from 'axios';

const API_URL = 'http://localhost:8080/pessoas';

export const getPessoas = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter pessoas:', error);
    throw error;
  }
};

export const criarPessoa = async (pessoa) => {
  try {
    const response = await axios.post(API_URL, pessoa);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar pessoa:', error);
    throw error;
  }
};

export const atualizarPessoa = async (id, pessoa) => {
  try {
    const url = `${API_URL}/${id}`;
    const response = await axios.put(url, pessoa);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar pessoa:', error);
    throw error;
  }
};

export const deletarPessoa = async (id) => {
  try {
    const url = `${API_URL}/${id}`;
    await axios.delete(url);
  } catch (error) {
    console.error('Erro ao deletar pessoa:', error);
    throw error;
  }
};


