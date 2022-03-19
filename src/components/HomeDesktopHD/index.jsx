import React, { useEffect, useState } from "react";
import CardAvatarAndBio from "../CardAvatarAndBio";
import CardUserInfo from "../CardUserInfo";
import CardProject from "../CardProject";
import WidgetMediaEmbedSoundcloud from "../WidgetMediaEmbedSoundcloud";
import Faviconuser32px from "../Faviconuser32px";
import ButtonBorderGreen from "../ButtonBorderGreen";
import ButtonFillGreen from "../ButtonFillGreen";
import "./HomeDesktopHD.css";
import UserProfile from "../../user_profile/UserProfile";
import PortfolioWidgetCollection from "../PortfolioWidget/PortfolioWidgetCollection"
import ActionButton from "../ActionButton/ActionButton"


const userProfile = new UserProfile("michael-thompson", "mixmi.app");

function HomeDesktopHD(props) {
  const {} = props;

  useEffect(() => {
    userProfile.load();
  }, []);

  return (
    <div className="container-center-horizontal">
      <div className="homedesktophd screen">
        <div className="all-content">
          <div className="user-info-cards-horizontal">
            <CardAvatarAndBio userProfile={userProfile}/>
            <CardUserInfo
              userProfile={userProfile}
            />
          </div>
          <div className="portfolio-widget-collection">
            <PortfolioWidgetCollection userProfile={userProfile} />
          </div>
          {/* <div className="projects-box">
            <div className="title-1 titleleft">Projects</div>
            <div className="projects-row">
              <CardProject />
              <CardProject className={cardProjectProps.className} />
            </div>
          </div>
          <div className="widget-columns">
            <div className="widget-title">
              <div className="title titleleft">Widgets Left</div>
              <div className="widget-column">
                <WidgetMediaEmbedSoundcloud />
                <WidgetMediaEmbedSoundcloud className={widgetMediaEmbedSoundcloudProps.className} />
              </div>
            </div>
            <div className="widget-title-1">
              <div className="title titleleft">Widgets Right</div>
              <div className="widget-column">
                <WidgetMediaEmbedSoundcloud className={widgetMediaEmbedSoundcloud2Props.className} />
                <WidgetMediaEmbedSoundcloud className={widgetMediaEmbedSoundcloud3Props.className} />
              </div>
            </div>
          </div> */}
        </div>
        <div className="nav-bar">
          <Faviconuser32px src={"https://picsum.photos/48"} />
          <div className="stacked-group-2">
            <ActionButton text={"Save"} onClick={() => userProfile.save()} isEnabled={true} />
            <ButtonBorderGreen userProfile={userProfile}/>
            <ButtonFillGreen userProfile={userProfile}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeDesktopHD;
