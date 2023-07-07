import React from 'react';
import estilos from './Alerta.module.scss';
import PropTypes from 'prop-types';

const Alerta = ({ tipo, mensagem }) => {
  return (
    <div className={`${estilos.alerta} ${estilos[tipo]}`}>
      <span className={estilos.alerta__icone}>
        {tipo === 'sucesso' && <i className="fa fa-check-circle" />}
        {tipo === 'erro' && <i className="fa fa-exclamation-circle" />}
        {tipo === 'aviso' && <i className="fa fa-info-circle" />}
      </span>
      <p className={estilos.alerta__mensagem}>{mensagem}</p>
    </div>
  );
};

Alerta.propTypes = {
    tipo: PropTypes.oneOf(['sucesso', 'erro', 'aviso']).isRequired,
    mensagem: PropTypes.string.isRequired,
  };

export default Alerta;
