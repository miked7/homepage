import React from "react";
import Brandstwitter from "../Brandstwitter";
import "./Social.css";

function Social(props) {
  const { socialMediaAccount } = props;

  return (
    <div className={`social-2`}>
      <div className="stacked-group">
        {/* <Brandstwitter /> */}
        <div className="social-handle profile-description">{socialMediaAccount.Uid}</div>
      </div>
    </div>
  );
}

export default Social;
