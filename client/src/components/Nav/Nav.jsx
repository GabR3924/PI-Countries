import React from "react";
import style from "./Nav.module.css";
import logo from "../../assets/world.gif";
import { FiMapPin } from 'react-icons/fi'

const Nav = () => {
  return (
    <div className={style.section}>
      <div className={style.gif}>
        {/* <img src={logo} alt="" /> */}
        <FiMapPin className={style.icon}/>
      </div>
      <div className={style.list}>
        <ul>
          <li>Home</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
