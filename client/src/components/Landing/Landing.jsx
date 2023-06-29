import React from 'react';
import style from './Landing.module.css';
import earth from '../../assets/earth.png';
import Nav from '../Nav/Nav';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/countries');
  }, [navigate]);

  return (
    <div className={style.section}>
      <Nav />
      <div className={style.gif}>
        <img src={earth} alt="...loading" />
      </div>
      <div className={style.txt}>
        <h1>
          Explora <br /> el mundo
        </h1>
      </div>
      <div className={style.btn}>
        <button>Paises</button>
        <button>Actividades</button>
      </div>
      
      <Outlet />
    </div>
  );
};

export default Landing;
