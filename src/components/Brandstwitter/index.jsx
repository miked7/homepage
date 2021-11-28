import React from "react";
import "./Brandstwitter.css";

function Brandstwitter(props) {
  const { src } = props;

  return (
    <div className="brandstwitter">
      <img className="icon-style" src={src} />
    </div>
  );
}

export default Brandstwitter;
