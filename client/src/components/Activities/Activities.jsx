import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
("react-router-dom");
import { getActivities } from "../../redux/actions/actions";
import CarActivity from "../cardActivity/cardActivity";
import style from "./Activities.module.css";
import logo from "../../assets/world.gif";

const Activities = () => {
  const dispatch = useDispatch();

  const activities = useSelector((state) => state.activities);

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  return (
    <div className={style.section}>
      <div className={style.home}>
        <div className={style.gif}>
        <img src={logo} alt="" />
        </div>
        <div className={style.list}>
          <ul>
            <li><Link to='/'>Home</Link></li>
          </ul>
        </div>
      </div>
      <div className={style.activities}>
      <button>
        <Link to="/new/activity">Crear</Link>
      </button>
        {activities &&
          activities.map((activity) => (
            <CarActivity
              key={activity.id}
              name={activity.name}
              dificultad={activity.dificultad}
              duracion={activity.duracion}
              temporada={activity.temporada}
            />
          ))}
      </div>
    </div>
  );
};

export default Activities;
