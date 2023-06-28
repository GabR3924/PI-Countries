import React from 'react'
import logo from '../../assets/world.gif'
import style from './Landing.module.css'
import earth from '../../assets/earth.png'

const Landinf = () => {
  return (
    <div className={style.section}>
      <div className={style.gif}>
      <img src={earth} alt="...loading" />
      </div>
    </div>
  )
}

export default Landinf