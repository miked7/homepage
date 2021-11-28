import React from "react";
import "./Faviconuser32px.css";

function Faviconuser32px(props) {
  const { src } = props;

  return (
    <div className="faviconsandyorange">
      <img className="sandy-2006-no-bg" src={src} />
    </div>
  );
}

export default Faviconuser32px;
