import React from "react";
import style from "./Card.module.css";

const Card = ({ name, flag, continent, onClick }) => {
  return (
    <div className={style.card} onClick={onClick}>
      <dic className={style.img}>
      <img src={flag} alt={`Bandera de ${name}`} />
      </dic>
      <div className={style.txt}>

      <h2>{name}</h2>
      <h4>{continent}</h4>
      </div>
    </div>
  );
};

export default Card;
