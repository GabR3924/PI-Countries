import React from 'react'
import style from './cardActivity.module.css'

const cardActivity = ({name, dificultad, duracion, temporada}) => {
  return (
    <div className={style.card}>
        <h1>{name}</h1>
        <h3>{dificultad}</h3>
        <h3>{duracion}</h3>
        <h3>{temporada}</h3>
    </div>
  )
}

export default cardActivity