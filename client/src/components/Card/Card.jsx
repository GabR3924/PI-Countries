import React from "react";
import style from "./Card.module.css";

const Card = ({ name, flag, poblacion }) => {
  return (
    <div className={style.card}>
      <h2>{name}</h2>
      <h4>poblacion:{poblacion}</h4>
      <img src={flag} alt={`Bandera de ${name}`} />
    </div>
  );
};

export default Card;
