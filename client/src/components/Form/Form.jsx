import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import style from './Form.module.css';
import { postActivity } from '../../redux/actions/actions';

const Form = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [dificultad, setDificultad] = useState('');
  const [duracion, setDuracion] = useState('');
  const [temporada, setTemporada] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name,
      dificultad,
      duracion,
      temporada,
    };
    dispatch(postActivity(data));
  };

  return (
    <div>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type='number'
          placeholder="Dificultad"
          value={dificultad}
          onChange={(event) => setDificultad(event.target.value)}
        />
        <input
          type="number"
          placeholder="Duracion"
          value={duracion}
          onChange={(event) => setDuracion(event.target.value)}
        />
        <input
          type="text"
          placeholder="Temporada"
          value={temporada}
          onChange={(event) => setTemporada(event.target.value)}
        />
        <div>paises</div>
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Form;
