import React from "react";
import "./ButtonBorderGreen.css";

function ButtonBorderGreen(props) {
  const { userProfile } = props;

  return (
    <div className="button-sign-in" onClick={() => userProfile.setDefault()}>
      <div className="overlap-group">
        <div className="label smallfont-family-1centerblack-bold">Reset</div>
      </div>
    </div>
  );
}

export default ButtonBorderGreen;
