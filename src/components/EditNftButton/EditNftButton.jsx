import React, { useState, useEffect, useRef } from "react";
import "./EditNftButton.css";
import ActionButton from "../ActionButton/ActionButton"
import Button from "../Button/Button"
import IconButton from "../IconButton/IconButton";
import CloseIcon from './../../static/img/close_icon.png';

const EditNftButton = ({ title, description, isShow, buttonText, onConfirm, onCancel }) => {
    const [isButtonShown, setIsButtonShown] = useState(isShow);

    const onClickNftButton = () => {
    };

    const onIsShownChanged = e => {
        const target = e.target;
        if (target.checked) {
            setIsButtonShown(target.value === "show");
        }
     };

    const OnConfirmButton = () => {
        onConfirm(isButtonShown);
    };

    return (
        <div className="all-stuff">
            <div className="close-button-container">
                <IconButton icon={CloseIcon} onClick={onCancel} />
            </div>
            <div className="title-and-text">
                <div className="social-bar title-font">{title}</div>
                <p className="paste-links-for-the description-font">{description}</p>
            </div>
            <div className="nft-button-wrapper">
                <ActionButton text={buttonText} onClick={() => onClickNftButton()} isEnabled={isButtonShown} />
            </div>
            <div className="radio-button-container">
            <input type="radio" value="show" name="options" onChange={onIsShownChanged} checked={isButtonShown} /><div className="radio-label">Display Button</div>
            <input type="radio" value="hide" name="options" onChange={onIsShownChanged} checked={!isButtonShown} /><div className="radio-label">Hide</div>
            </div>
            <div className="edit-button-container">
                <div className="command-button-box">
                    <div className="command-button">
                        <Button text="Cancel" onClick={() => onCancel()} />
                    </div>
                    <div className="command-button">
                        <ActionButton text="Confirm" onClick={() => OnConfirmButton()} isEnabled={true} />
                    </div>
                </div>
            </div>
        </div>
    );
  };
  
  export default EditNftButton;