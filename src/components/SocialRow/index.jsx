import React from "react";
import Social from "../Social";
import "./SocialRow.css";

function SocialRow(props) {
  const { className, socialProps, social2Props } = props;

  return (
    <div className={`social-row ${className || ""}`}>
      <Social socialHandle={socialProps.socialHandle} brandstwitterProps={socialProps.brandstwitterProps} />
      <Social
        socialHandle={social2Props.socialHandle}
        className={social2Props.className}
        brandstwitterProps={social2Props.brandstwitterProps}
      />
    </div>
  );
}

export default SocialRow;
