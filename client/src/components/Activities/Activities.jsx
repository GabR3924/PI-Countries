import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
("react-router-dom");
import { getActivities } from "../../redux/actions/actions";
import CarActivity from "../cardActivity/cardActivity";
import style from "./Activities.module.css";
import logo from "../../assets/world.gif";
import Modal from "../Modal/Modal";
import Form from "../Form/Form";

const Activities = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
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
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={style.activities}>
        {/* <Link to="/new/activity"> */}
        <button onClick={() => setIsModalOpen(true)}>Crear</button>
        {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <Form />
        </Modal>)}

        {/* </Link> */}
        {Array.isArray(activities) &&
          activities.map((activity) => (
            <CarActivity
              key={activity.id}
              name={activity.name}
              dificultad={activity.dificultad}
              duracion={activity.duracion}
              temporada={activity.temporada}
              countries={activity.countries}
            />
          ))}
      </div>
    </div>
  );
};

export default Activities;
