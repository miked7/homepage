import React, { useState, useEffect, useRef } from "react";
import "./EditPortfolioWidget.css";
import ActionButton from "../ActionButton/ActionButton"
import Button from "../Button/Button"
import IconButton from "../IconButton/IconButton";
import CloseIcon from './../../static/img/close_icon.png';
import MultiLineEditor from '../MultiLineEditor/MultiLineEditor'
import { setIframeSize } from "../../utils/html";

const EditPortfolioWidget = ({ userProfile, portfolioItem, onClose }) => {
    const [title, setTitle] = useState(portfolioItem ? portfolioItem.Title : "My Title");
    const [description, setDescription] = useState(portfolioItem ? portfolioItem.Description : "My Description");
    const [widgetCode, setWidgetCode] = useState(portfolioItem ? portfolioItem.WidgetCode : "");

    useEffect(() => {
        if (portfolioItem) {
            portfolioItem.addListener(() => {
                setTitle(portfolioItem.Title);
                setDescription(portfolioItem.Description);
                setWidgetCode(portfolioItem.WidgetCode);
            });
        }
      }, []);

    const OnConfirmButton = () => {
        if (portfolioItem) {
            portfolioItem.Title = title;
            portfolioItem.Description = description;
            portfolioItem.WidgetCode = setIframeSize(widgetCode, 300, 200);
        }
        else {
            userProfile.addPortfolioItem(title, description, setIframeSize(widgetCode, 300, 200));
        }
        
        userProfile.save();
        onClose();
    };

    return (
        <div className="all-stuff">
            <div className="close-button-container">
                <IconButton icon={CloseIcon} onClick={() => onClose()} />
            </div>
            <div className="title-and-text">
                <div className="social-bar title-font">EMBED MEDIA</div>
            </div>
            <div className="widget-code-editor-container">
                <p className="edit-portfolio-label description-font">
                    You can embed all sorts of media --
                    <br/>
                    <br/>
                    A YouTube vid, TikTok, SoundCloud playlist, or and NFT
                    <br/>
                    <br/>
                    Copy the embed code from its source and paste it into the box below</p>
                <MultiLineEditor 
                    initialValue={widgetCode}
                    label="paste code here <code>...</code>"
                    onChange={(newValue) => setWidgetCode(newValue)}
                    isEnabled={true} />
            </div>
            <div className="command-button-box">
                <div className="command-button">
                    <Button text="Cancel" onClick={() => onClose()} />
                </div>
                <div className="command-button">
                    <ActionButton text="Confirm" onClick={() => OnConfirmButton()} isEnabled={ widgetCode } />
                </div>
            </div>
        </div>
    );
  };
  
  export default EditPortfolioWidget;