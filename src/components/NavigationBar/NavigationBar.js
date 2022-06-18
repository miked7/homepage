import React, { useState, useEffect, useRef } from "react";
import "./NavigationBar.css";
import EditIcon from './../../static/img/edit-16.png';
import DeleteIcon from './../../static/img/trash/trash-16.png';
import ReactModal from 'react-modal';
import { userSession } from "../../utils/auth";
import SignInButton from "../SignInButton/SignInButton";
import Faviconuser32px from "../Faviconuser32px";
import MixmiIcon from './../../static/img/mixmi-icon_240.png';
import LinkAwayIcon from './../../static/img/link-away_48.png';
import Button  from "../Button/Button";

const NavigationBar = ({ userProfile }) => {
  const [isProjectEditorOpen, setIsProjectEditorOpen] = useState(false);

  return (
    <div className="nav-bar">
        <Faviconuser32px src={MixmiIcon} />
        <div className="stacked-group-2">
            { userSession.isUserSignedIn() ? 
            <div className="user-domain-name__container">
                <p className="user-domain-name__text">{`${userProfile.UserId}.${userProfile.Domain}`}</p>
            </div>
            :
            <div className="get-domain-name__container" onClick={() => window.open(`https://domains.paradigma.global/`)}>
                <p className="get-domain-name__text" >GET YOUR WEB 3 DOMAIN NAME</p>
                <img className="get-domain-name__icon" src={LinkAwayIcon} />
            </div>
            }
        { userSession.isUserSignedIn() ? <Button text={"Sign Out"} onClick={() => userProfile.save().then((url) => userSession.signUserOut()).then((url) => window.location = '/')} /> : <SignInButton userProfile={userProfile} /> }
        </div>
    </div>
      );
}

export default NavigationBar;
