import React from 'react'
import style from './cardActivity.module.css'

const cardActivity = ({name, dificultad, duracion, temporada, countries}) => {
  return (
    <div className={style.card}>
        <h1>{name}</h1>
        <h3>{dificultad}</h3>
        <h3>{duracion}</h3>
        <h3>{temporada}</h3>
        {Array.isArray(countries) && countries.map(({country}) => (
        <h4 key={country.id}>{country.name}</h4>
      ))}
    </div>
  )
}

export default cardActivity