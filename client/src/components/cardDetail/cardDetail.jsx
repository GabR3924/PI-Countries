import React from 'react'
import { Link } from 'react-router-dom'

const CardDetail = ({ country }) => {
  return (
    <div>
      <h2>{country.name}</h2>
      <img src={country.imagen} alt={`Bandera de ${country.name}`} />
      <h3> continent: {country.continent}</h3>
      <h3> capital: {country.capital}</h3>
      <h3> subregion:{ country.subregion}</h3>
      <h3>area: {country.area}</h3>
      <p>Población: {country.population}</p>
      <button><Link to='/activities'>Actividades</Link></button>
    </div>
  )
}

export default CardDetail
