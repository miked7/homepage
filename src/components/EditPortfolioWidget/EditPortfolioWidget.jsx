import React, { useState, useEffect, useRef } from "react";
import "./EditPortfolioWidget.css";
import ActionButton from "../ActionButton/ActionButton"
import Button from "../Button/Button"
import IconButton from "../IconButton/IconButton";
import CloseIcon from './../../static/img/close_icon.png';

const EditPortfolioWidget = ({ portfolioItem, onClose }) => {
    const [title, setTitle] = useState(portfolioItem.Title);
    const [description, setDescription] = useState(portfolioItem.Description);
    const [widgetCode, setWidgetCode] = useState(portfolioItem.WidgetCode);

    useEffect(() => {
        portfolioItem.addListener(() => {
            setTitle(portfolioItem.Title);
            setDescription(portfolioItem.Description);
            setWidgetCode(portfolioItem.WidgetCode);
        })
      }, []);

    const OnConfirmButton = () => {
        portfolioItem.WidgetCode = widgetCode;
        onClose();
    };

    return (
        <div className="all-stuff">
            <div className="close-button-container">
                <IconButton icon={CloseIcon} onClick={() => onClose()} />
            </div>
            <div className="title-and-text">
                <div className="social-bar title-font">{title}</div>
                <p className="paste-links-for-the description-font">{description}</p>
            </div>
            <div className="widget-code-editor-container">
                <textarea className="widget-code-editor-textarea" value={widgetCode} />
            </div>
            <div className="command-button-box">
                <div className="command-button">
                    <Button text="Cancel" onClick={() => onClose()} />
                </div>
                <div className="command-button">
                    <ActionButton text="Confirm" onClick={() => OnConfirmButton()} isEnabled={true} />
                </div>
            </div>
        </div>
    );
  };
  
  export default EditPortfolioWidget;