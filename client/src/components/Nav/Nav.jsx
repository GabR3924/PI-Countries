import React from "react";
import style from "./Nav.module.css";
import logo from "../../assets/world.gif";

const Nav = () => {
  return (
    <div className={style.section}>
      <div className={style.gif}>
        <img src={logo} alt="" />
      </div>
      <div className={style.list}>
        <ul>
          <li>Paises</li>
          <li>Actividades</li>
          <li>Log in</li>
          <li>Sing in</li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
