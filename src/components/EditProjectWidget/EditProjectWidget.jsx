import React, { useState, useEffect, useRef } from "react";
import "./EditProjectWidget.css";
import ActionButton from "../ActionButton/ActionButton"
import Button from "../Button/Button"
import IconButton from "../IconButton/IconButton";
import CloseIcon from './../../static/img/close_icon.png';

const EditProjectWidget = ({ project, onClose }) => {
    const [name, setName] = useState(project.Name);
    const [description, setDescription] = useState(project.Description);
    const [imageUrl, setImageUrl] = useState(project.ImageUrl);
    const [siteUrl, setSiteUrl] = useState(project.SiteUrl);

    useEffect(() => {
        project.addListener(() => {
            setName(project.Name);
            setDescription(project.Description);
            setImageUrl(project.ImageUrl);
            setSiteUrl(project.SiteUrl)
        })
      }, []);

    const OnConfirmButton = () => {
        project.Name = name;
        project.Description = description;
        project.ImageUrl = imageUrl;
        project.SiteUrl = siteUrl;
        onClose();
    };

    return (
        <div className="project-all-stuff">
            <div className="project-close-button-container">
                <IconButton icon={CloseIcon} onClick={() => onClose()} />
            </div>
            <div className="project-fields-container">
                <div className="social-bar title-font">Name:</div>
                <input type="text" className="edit-project-input-text" defaultValue={title} onChange={e => setName(e.target.value)} />
                <p className="edit-project-label field-title-font">Description:</p>
                <input type="text" className="edit-project-input-text" defaultValue={description} onChange={e => setDescription(e.target.value)} />
                <p className="edit-project-label field-title-font">Image URL:</p>
                <input type="text" className="edit-project-input-text" defaultValue={description} onChange={e => setImageUrl(e.target.value)} />
                <p className="edit-project-label field-title-font">Site URL:</p>
                <input type="text" className="edit-project-input-text" defaultValue={description} onChange={e => setSiteUrl(e.target.value)} />
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
  
  export default EditProjectWidget;