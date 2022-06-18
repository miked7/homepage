import React from "react";
import "./Button.css";

const Button = ({ text, onClick }) => {

  return (
    <div className="button-regular" onClick={() => onClick()}>
      <div className="group-regular">
        <p className="label-regular smallfont-family-1centerblack-bold">{text}</p>
      </div>
    </div>
    );
}

export default Button;
