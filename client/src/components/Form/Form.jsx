import React from "react";
import style from './Form.module.css'

const Form = () => {
  return (
    <div>
      <form className={style.form} action="">
        <input 
        type="text" 
        placeholder="Nombre"
        />
        <input 
        type="text" 
        placeholder="Dificultad"
        />
        <input 
        type="text" 
        placeholder="Duracion"
        />
        <input 
        type="text" 
        placeholder="Temporada"
        />
        <div>
            paises
        </div>
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Form;
