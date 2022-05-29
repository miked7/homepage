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
import LinkAwayIcon from './../../static/img/link-away_48.png';
import MixmiIcon from './../../static/img/mixmi-icon_240.png';

const userProfile = createUserProfile();

function HomeDesktopHD(props) {
  const {} = props;

  useEffect(() => {
    userProfile.load();
  }, []);

  return (
    <div className="main">
      <div className="main__center screen">
        <div className="nav-bar">
          <Faviconuser32px src={MixmiIcon} />
          <div className="stacked-group-2">
            <div className="get-domain-name__container" onClick={() => window.open(`https://domains.paradigma.global/`)}>
              <p className="get-domain-name__text" >GET YOUR WEB 3 DOMAIN NAME</p>
              <img className="get-domain-name__icon" src={LinkAwayIcon} />
            </div>
            {
              //<ActionButton text={"Save"} onClick={() => userProfile.save()} isEnabled={true} />
              //<ButtonBorderGreen userProfile={userProfile}/> 
              //<ButtonFillGreen userProfile={userProfile}/>
            }
            <ButtonBorderGreen userProfile={userProfile}/> 
          </div>
        </div>
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
