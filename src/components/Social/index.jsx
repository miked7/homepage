import React from "react";
import Brandstwitter from "../Brandstwitter";
import "./Social.css";

function Social(props) {
  const { socialHandle, className, brandstwitterProps } = props;

  return (
    <div className={`social-2 ${className || ""}`}>
      <div className="stacked-group">
        <Brandstwitter src={brandstwitterProps.src} />
        <div className="social-handle profile-description">{socialHandle}</div>
      </div>
    </div>
  );
}

export default Social;
