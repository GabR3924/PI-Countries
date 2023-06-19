import React from "react";
import style from "./Card.module.css";

const Card = ({ name, flag }) => {
  return (
    <div className={style.card}>
      <h2>{name}</h2>
      <img src={flag} alt={`Bandera de ${name}`} />
    </div>
  );
};

export default Card;
