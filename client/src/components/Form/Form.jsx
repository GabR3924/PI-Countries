import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './Form.module.css';
import { postActivity, validateForm } from '../../redux/actions/actions';
import { useNavigate } from 'react-router-dom';


const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [name, setName] = useState('');
  const [dificultad, setDificultad] = useState('');
  const [duracion, setDuracion] = useState('');
  const [temporada, setTemporada] = useState('');
  const error = useSelector((state) => state.error);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name,
      dificultad,
      duracion,
      temporada,
    };
    dispatch(validateForm(data));
    if (error) {
      return;
    }
    dispatch(postActivity(data));
    navigate('/activities');

  };

  // const handleChange = () => {
  //   navigate('/activities');

  // }
  

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
        <button type="submit">Enviar</button>
      </form>
      {error && <div>{error}</div>}

    </div>
  );
};

export default Form;
