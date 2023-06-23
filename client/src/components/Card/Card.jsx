import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ name, flag, poblacion }) => {
  return (
    <div className={style.card}>
      <h2><Link to='/detail'>{name}</Link></h2>
      <h4>poblacion:{poblacion}</h4>
      <img src={flag} alt={`Bandera de ${name}`} />
    </div>
  );
};

export default Card;
