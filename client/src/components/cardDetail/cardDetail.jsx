import React from 'react'
import { Link } from 'react-router-dom'
import style from './cardDetail.module.css'

const CardDetail = ({ country }) => {
  return (
    <div className={style.content}>
      <img src={country.imagen} alt={`Bandera de ${country.name}`} />
      <p>{country.name}</p>
      <p>{country.continente}</p>
      <p> capital<br/>{country.capital}</p>
      <p> subregion<br/>{ country.subregion}</p>
      <p>area<br/>{country.area}</p>
      <p>Población<br/>{country.poblacion}</p>
      <button><Link to='/activities'>Actividades</Link></button>
    </div>
  )
}

export default CardDetail
