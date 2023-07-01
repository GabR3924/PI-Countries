import React from 'react'
import style from './cardActivity.module.css'

const cardActivity = ({name, dificultad, duracion, temporada, countries}) => {

  return (
    <div className={style.card}>
        <h1>{name}</h1>
        <h3>{dificultad}</h3>
        <h3>{duracion}</h3>
        <h3>{temporada}</h3>
        {Array.isArray(countries) &&
        countries.every((country) => country && typeof country === 'object') &&
        countries.map((country) => <h4 key={country.id}>{country.name}</h4>)}
        {/* , se agrega una comprobación adicional usando el método every para asegurarse de que todos los elementos del arreglo countries sean objetos válidos antes de llamar al método map. Si alguno de los elementos del arreglo no es un objeto válido, el método map no se llamará y no se producirá el error. */}
    </div>
  )
}

export default cardActivity