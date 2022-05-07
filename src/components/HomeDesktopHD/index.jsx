import React, { useEffect, useState } from "react";
import CardAvatarAndBio from "../CardAvatarAndBio";
import CardUserInfo from "../CardUserInfo";
import CardProject from "../CardProject";
import WidgetMediaEmbedSoundcloud from "../WidgetMediaEmbedSoundcloud";
import Faviconuser32px from "../Faviconuser32px";
import ButtonBorderGreen from "../ButtonBorderGreen";
import ButtonFillGreen from "../ButtonFillGreen";
import "./HomeDesktopHD.css";
import PortfolioWidgetCollection from "../PortfolioWidget/PortfolioWidgetCollection"
import ProjectWidgetCollection from "../ProjectWidget/ProjectWidgetCollection";
import ActionButton from "../ActionButton/ActionButton"
import { createUserProfile } from "../../user_profile/UserProfileFactory";

const userProfile = createUserProfile();

function HomeDesktopHD(props) {
  const {} = props;

  useEffect(() => {
    userProfile.load();
  }, []);

  return (
    <div className="container-center-horizontal">
      <div className="homedesktophd screen">
        <div className="nav-bar">
          <Faviconuser32px src={"https://picsum.photos/48"} />
          <div className="stacked-group-2">
            <ActionButton text={"Save"} onClick={() => userProfile.save()} isEnabled={true} />
            <ButtonBorderGreen userProfile={userProfile}/>
            <ButtonFillGreen userProfile={userProfile}/>
          </div>
        </div>
        <div className="all-content">
          <div className="user-info-cards-horizontal">
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
