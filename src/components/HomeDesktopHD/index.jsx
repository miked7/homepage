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

const userProfile = new UserProfile("michael-thompson");

function HomeDesktopHD(props) {
  const {
    title,
    title2,
    title3,
    cardAvatarAndBioProps,
    cardUserInfoProps,
    cardProjectProps,
    widgetMediaEmbedSoundcloudProps,
    widgetMediaEmbedSoundcloud2Props,
    widgetMediaEmbedSoundcloud3Props,
    faviconuser32pxProps,
    buttonBorderGreenProps,
    buttonFillGreenProps,
  } = props;

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
              textGourpSTXWalletProps={cardUserInfoProps.textGourpSTXWalletProps}
              userfavoriteQuotedesktopProps={cardUserInfoProps.userfavoriteQuotedesktopProps}
              socialRowProps={cardUserInfoProps.socialRowProps}
              socialRow2Props={cardUserInfoProps.socialRow2Props}
              textGroupCreatorIdDescrProps={cardUserInfoProps.textGroupCreatorIdDescrProps}
            />
          </div>
          <div className="projects-box">
            <div className="title-1 titleleft">{title}</div>
            <div className="projects-row">
              <CardProject />
              <CardProject className={cardProjectProps.className} />
            </div>
          </div>
          <div className="widget-columns">
            <div className="widget-title">
              <div className="title titleleft">{title2}</div>
              <div className="widget-column">
                <WidgetMediaEmbedSoundcloud />
                <WidgetMediaEmbedSoundcloud className={widgetMediaEmbedSoundcloudProps.className} />
              </div>
            </div>
            <div className="widget-title-1">
              <div className="title titleleft">{title3}</div>
              <div className="widget-column">
                <WidgetMediaEmbedSoundcloud className={widgetMediaEmbedSoundcloud2Props.className} />
                <WidgetMediaEmbedSoundcloud className={widgetMediaEmbedSoundcloud3Props.className} />
              </div>
            </div>
          </div>
        </div>
        <div className="nav-bar">
          <Faviconuser32px src={faviconuser32pxProps.src} />
          <div className="stacked-group-2">
            <ButtonBorderGreen userProfile={userProfile}/>
            <ButtonFillGreen userProfile={userProfile}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeDesktopHD;
