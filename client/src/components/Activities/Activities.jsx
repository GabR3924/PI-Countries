import { Link } from 'react-router-dom'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
'react-router-dom'
import { getActivities } from '../../redux/actions/actions'
import CarActivity from '../cardActivity/cardActivity'
import style from './Activities.module.css'
import Nav from '../Nav/Nav'

const Activities = () => {
  const dispatch = useDispatch();

  const activities = useSelector((state) => state.activities);

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  return (
    <div className={style.section}>
      <Nav/>
      <div className={style.activities}>
        {activities && activities.map((activity) => (
          <CarActivity
          key={activity.id}
          name={activity.name}
          dificultad={activity.dificultad}
          duracion={activity.duracion}
          temporada={activity.temporada}
          />
        ))}
      </div>
      <button><Link to='/new/activity'>Crear</Link></button>
    </div>
  )
}

export default Activities