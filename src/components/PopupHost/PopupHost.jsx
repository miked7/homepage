import React, { useState, useEffect, useRef } from "react";
import "./PopupHost.css";

const PopupHost = ({ title, description, content }) => {
    // const [editingValue, setEditingValue] = useState(value);

    return (
        <div className="popup-social-short-list-360px">
      <img className="fill-1" src={fill} />
      <div className="all-stuff">
        <TitleAndText socialBar={titleAndTextProps.socialBar} pasteLinksForThe={titleAndTextProps.pasteLinksForThe} />
        {content}
        <Buttons />
      </div>
    </div>
    );
  };
  
  export default PopupHost;