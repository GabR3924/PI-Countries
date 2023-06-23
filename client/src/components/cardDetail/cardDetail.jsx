import React from 'react'

const CardDetail = ({ country }) => {
  return (
    <div>
      <h2>{country.name}</h2>
      <img src={country.flag} alt={`Bandera de ${country.name}`} />
      <h3> continent: {country.continent}</h3>
      <h3> capital: {country.capital}</h3>
      <h3> subregion:{ country.subregion}</h3>
      <h3>area: {country.area}</h3>
      <p>Población: {country.population}</p>
    </div>
  )
}

export default CardDetail
