import React from 'react'
import { Link } from 'react-router-dom'

const Activities = () => {
  return (
    <div>
      actividades
      <button><Link to='/new/activity'>Crear</Link></button>
    </div>
  )
}

export default Activities