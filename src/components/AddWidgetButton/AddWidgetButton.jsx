import React from "react";
import "./AddWidgetButton.css";
import AddWidgetIcon from './../../static/img/add-widget.png';

const AddWidgetButton = ({ onClick, text }) => {

  return (
    <div className="add-widget-button-container" onClick={() => onClick()}>
      <div className="add-widget-button-text-left" />
      <img className="add-widget-button-image" src={AddWidgetIcon} />
      <div className="add-widget-button-text-right">{text}</div>
    </div>);
}

export default AddWidgetButton;
