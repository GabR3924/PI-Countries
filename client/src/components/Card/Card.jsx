import React from "react";
import style from "./Card.module.css";

const Card = ({ name, flag, continent, onClick }) => {
  return (
    <div className={style.card} onClick={onClick}>
      <h2>{name}</h2>
      <h4>continente: {continent}</h4>
      <img src={flag} alt={`Bandera de ${name}`} />
    </div>
  );
};

export default Card;
