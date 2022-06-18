import React, { useEffect, useState } from "react";
import CardAvatarAndBio from "../CardAvatarAndBio";
import CardUserInfo from "../CardUserInfo";
import "./HomeDesktopHD.css";
import PortfolioWidgetCollection from "../PortfolioWidget/PortfolioWidgetCollection"
import ProjectWidgetCollection from "../ProjectWidget/ProjectWidgetCollection";
import { createUserProfile } from "../../user_profile/UserProfileFactory";
import NavigationBar from "../NavigationBar/NavigationBar";

const userProfile = createUserProfile();

function HomeDesktopHD(props) {
  const {} = props;

  useEffect(() => {
    userProfile.load();
  }, []);

  return (
    <div className="main">
      <div className="main__center screen">
        <NavigationBar userProfile={userProfile} />
        <div className="content">
          <div className="user-info-cards-container">
            <CardAvatarAndBio userProfile={userProfile}/>
            <CardUserInfo userProfile={userProfile} />
          </div>
          <div className="project-widget-collection">
            <ProjectWidgetCollection userProfile={userProfile} />
          </div>
          <div className="portfolio-widget-collection">
            <PortfolioWidgetCollection userProfile={userProfile} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeDesktopHD;
