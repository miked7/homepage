import React from "react";
import TextBoxProject from "../TextBoxProject";
import "./CardProject.css";

function CardProject(props) {
  const { className } = props;

  return (
    <a href="https://www.mixmi.app/" target="_blank">
      <div className={`card-project ${className || ""}`}>
        <img
          className="image-project"
          src="/img/homedesktop-hd-imageproject-22E332B6-90AC-4B3B-9170-39C5B0145DCA@2x.png"
        />
        <TextBoxProject />
      </div>
    </a>
  );
}

export default CardProject;
