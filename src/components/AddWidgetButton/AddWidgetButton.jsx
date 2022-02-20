import React from "react";
import "./AddWidgetButton.css";
import AddWidgetIcon from './../../static/img/add-widget.png';

const AddWidgetButton = ({ onClick }) => {

  return (
    <div className="add-widget-button-container" onClick={() => onClick()}>
      <img className="add-widget-button-image" src={AddWidgetIcon} />
    </div>);
}

export default AddWidgetButton;
