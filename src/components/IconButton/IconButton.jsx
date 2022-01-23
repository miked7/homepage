import React from "react";
import "./IconButton.css";

const IconButton = ({ icon, onClick }) => {

  return (
    <div className="icon-button-container" onClick={() => onClick()}>
      <img className="icon-button-image" src={icon} />
    </div>);
}

export default IconButton;
