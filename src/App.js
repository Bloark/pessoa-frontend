import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/NavBar/Home';
import PessoaList from './components/PessoaList';
import PessoaDetails from './components/PessoaDetails';
import PessoaForm from './components/Formularios/Adicionar/PessoaForm';
import UpdatePessoa from './components/Formularios/Update/UpdatePessoa'; // Importe o componente UpdatePessoa aqui
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pessoas" element={<PessoaList />} />
        <Route path="/pessoas/novo" element={<PessoaForm />} />
        <Route path="/pessoas/atualizar/:id" element={<UpdatePessoa />} /> {/* Adicione esta linha */}
        <Route path="/pessoas/:id" element={<PessoaDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;


