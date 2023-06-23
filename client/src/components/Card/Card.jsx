import React from "react";
import style from "./Card.module.css";

const Card = ({ name, flag, poblacion, onClick }) => {
  return (
    <div className={style.card} onClick={onClick}>
      <h2>{name}</h2>
      <h4>poblacion:{poblacion}</h4>
      <img src={flag} alt={`Bandera de ${name}`} />
    </div>
  );
};

export default Card;
