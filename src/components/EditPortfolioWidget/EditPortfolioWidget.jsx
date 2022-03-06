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
        portfolioItem.Title = title;
        portfolioItem.Description =description;
        portfolioItem.WidgetCode = widgetCode;
        onClose();
    };

    return (
        <div className="all-stuff">
            <div className="close-button-container">
                <IconButton icon={CloseIcon} onClick={() => onClose()} />
            </div>
            <div className="title-and-text">
                <div className="social-bar title-font">Title:</div>
                <input type="text" className="edit-portfolio-item-input-text" defaultValue={title} onChange={e => setTitle(e.target.value)} />
                <p className="edit-portfolio-label description-font">Description:</p>
                <input type="text" className="edit-portfolio-item-input-text" defaultValue={description} onChange={e => setDescription(e.target.value)} />
            </div>
            <div className="widget-code-editor-container">
                <p className="edit-portfolio-label description-font">Code:</p>
                <textarea className="widget-code-editor-textarea" defaultValue={widgetCode} onChange={e => setWidgetCode(e.target.value)} />
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