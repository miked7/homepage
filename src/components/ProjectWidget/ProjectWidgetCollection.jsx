import { React, useState, useEffect } from "react";
import "./ProjectWidgetCollection.css";
import AddWidgetIcon from './../../static/img/add-widget.png';
import UserProfile from "../../user_profile/UserProfile";
import Project from "../../user_profile/Project";
import AddWidgetButton from "../AddWidgetButton/AddWidgetButton";
import ProjectWidget from "./ProjectWidget"
import ReactModal from 'react-modal';
import AddProjectWidget from "../AddProjectWidget/AddProjectWidget";

const ProjectWidgetCollection = ({ userProfile }) => {
    const [projects, setProjects] = useState(Array.from(userProfile.Projects.values()));
    const [isAddProjectOpen, setIsAddProjectOpen] = useState(false);

    useEffect(() => {
        userProfile.addListener(() => {
          let pArray = Array.from(userProfile.Projects.values());
          setProjects(pArray);
        })
      }, []);

  return (
      <div className="project-widget-collection-container">
          <div className="project-widget-collection-title">Links</div>
        <div className="project-widget-collection-items-container">
            { projects.map((p, index) => <ProjectWidget className="project-widget" project={p} userProfile={userProfile} key={index} />) }
        </div>
        <div className="add-project-widget-button">
            { userProfile.IsEditable ? <AddWidgetButton onClick={() => setIsAddProjectOpen(true)} text={ userProfile.IsEditable ? "Add links to another mixmi profile or url here" : ""} /> : <p hidden/> }
            <ReactModal className="edit-popup" isOpen={isAddProjectOpen} contentLabel="Project">
                <AddProjectWidget userProfile={userProfile} onClose={() => setIsAddProjectOpen(false)} />
        </ReactModal>
        </div>
      </div>);
}

export default ProjectWidgetCollection;
