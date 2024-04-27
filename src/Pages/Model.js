import React from "react";
import "./model.css";

const Modal = ({ message, closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Welcome Message</h2>
        <p>{message}</p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
