import React, { useState, useEffect, useRef } from "react";
import "./ProjectWidget.css";
import AddWidgetIcon from './../../static/img/add-widget.png';
import Project from "../../user_profile/Project";
import EditIcon from './../../static/img/edit-16.png';
import DeleteIcon from './../../static/img/trash/trash-16.png';
import ReactModal from 'react-modal';
//import EditProjectWidget from "../EditProjectWidget/EditProjectWidget";

const ProjectWidget = ({ project, userProfile }) => {
  const [isProjectEditorOpen, setIsProjectEditorOpen] = useState(false);

  return (
        <div className="project-widget-container">
            <div className="project-widget-edit-controls-container">
                { userProfile.IsEditable ? <img className="edit-icon-project-widget" src={EditIcon} onClick={() => setIsProjectEditorOpen(true)} /> : <p hidden/> }
                { userProfile.IsEditable ? <img className="delete-icon-project-widget" src={DeleteIcon} onClick={() => userProfile.removeProject(project.Id)} /> : <p hidden/> }
                <ReactModal className="edit-project-popup" isOpen={isProjectEditorOpen} contentLabel="Project">
                    {/* <EditProjectWidget project={project} onClose={() => setIsProjectEditorOpen(false)} /> */}
                </ReactModal>
            </div>
            <a className="project-widget-content-container" href={project.SiteUrl} target="_blank" rel="noopener noreferrer">
                <div className="project-widget-image-container">
                    <img className="project-widget-image" src={project.ImageUrl} />
                </div>
                <div className="project-widget-title-description-container">
                    <div className="project-widget-title">{project.Name}</div>
                    <div className="project-widget-description">{project.Description}</div>
                </div>
            </a>
        </div>
      );
}

export default ProjectWidget;
