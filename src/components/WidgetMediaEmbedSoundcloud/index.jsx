import React from "react";
import "./WidgetMediaEmbedSoundcloud.css";

function WidgetMediaEmbedSoundcloud(props) {
  const { className } = props;

  return (
    <div className={`widget-embed-soundcloud ${className || ""}`}>
      <div className="description subtitles">description</div>
      <div className="embed-container border-1px-mountain-mist"></div>
    </div>
  );
}

export default WidgetMediaEmbedSoundcloud;
