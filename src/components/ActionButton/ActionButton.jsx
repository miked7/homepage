import React, { useState, useEffect, useRef } from "react";
import "./ActionButton.css";

const Button = ({ text, onClick, isEnabled }) => {
  const [isButtonEnabled, setIsButtonEnabled] = useState(isEnabled);

  useEffect(() => {
    setIsButtonEnabled(isEnabled);
  }, [isEnabled]);

  return (
    <div className="button-action" onClick={() => onClick()}>
      <div className={`group-action-${isButtonEnabled ? "enabled" : "disabled"}`}>
        <p className="label-action smallfont-family-1centerblack-bold">{text}</p>
      </div>
    </div>);
}

export default Button;
