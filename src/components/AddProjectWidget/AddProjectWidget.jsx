import React, { useState, useEffect, useRef } from "react";
import "./AddProjectWidget.css";
import ActionButton from "../ActionButton/ActionButton"
import Button from "../Button/Button"
import IconButton from "../IconButton/IconButton";
import CloseIcon from './../../static/img/close_icon.png';
import { APP_DOMAIN } from "../../utils/environment";

const AddProjectWidget = ({ userProfile, onClose }) => {
    const [isHomepageTargetProject, setIsHomepageTargetProject] = useState(true);
    const [homepageName, setHomepageName] = useState("");
    const [otherUrl, setOtherUrl] = useState("");

    // // const [name, setName] = useState("");
    // // const [description, setDescription] = useState("");
    // // const [imageUrl, setImageUrl] = useState("");
    // // const [siteUrl, setSiteUrl] = useState("");

    const onIsHomepageTargetProject = e => {
        const target = e.target;
        if (target.checked) {
            setIsHomepageTargetProject(target.value === "homepage-choice");
        }
    };

    const OnConfirmButton = () => {
        if (isHomepageTargetProject) {
            userProfile.addProject(homepageName, homepageName, "https://picsum.photos/128", `https://${homepageName}.${APP_DOMAIN}`);
        } else {
            userProfile.addProject(otherUrl, "", "https://picsum.photos/128", otherUrl);
        }
        
        onClose();
    };

    return (
        <div className="project-all-stuff">
            <div className="project-close-button-container">
                <IconButton icon={CloseIcon} onClick={() => onClose()} />
            </div>
            <div className="radio-button-container">
                <div className="choice-container">
                    <div className="add-project-radio-container">
                        <input type="radio" value="homepage-choice" name="options" onChange={onIsHomepageTargetProject} checked={isHomepageTargetProject} />
                    </div>
                    <div className="editor-container">
                        <p className="add-project-editor-label description-font">Username:</p>
                        <input type="text" className={isHomepageTargetProject ? "add-project-input-text" : "add-project-input-text-disabled"} defaultValue={""} disabled={!isHomepageTargetProject} onChange={e => setHomepageName(e.target.value)} />
                    </div>
                </div>
                <div className="choice-container">
                    <div className="add-project-radio-container">
                        <input type="radio" value="other-choice" name="options" onChange={onIsHomepageTargetProject} checked={!isHomepageTargetProject} />
                    </div>
                    <div className="editor-container">
                        <p className="add-project-editor-label description-font">URL:</p>
                        <input type="text" className={!isHomepageTargetProject ? "add-project-input-text" : "add-project-input-text-disabled"} defaultValue={""} disabled={isHomepageTargetProject} onChange={e => setOtherUrl(e.target.value)} />
                    </div>
                </div>
            </div>
            <div className="command-button-box">
                <div className="command-button">
                    <Button text="Cancel" onClick={() => onClose()} />
                </div>
                <div className="command-button">
                    <ActionButton text="Confirm" onClick={() => OnConfirmButton()} isEnabled={isHomepageTargetProject ? (homepageName !== "") : (otherUrl !== "")} />
                </div>
            </div>
        </div>
    );
  };
  
  export default AddProjectWidget;