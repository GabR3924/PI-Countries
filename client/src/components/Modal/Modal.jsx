import React from "react";
import ReactDOM from "react-dom";
import style from './Modal.module.css'

const Modal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div className={style.modal} onClick={onClose}>
      <div className={style.content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
