import React from "react";
import "./ButtonFillGreen.css";
import { getPerson, getUserData, userSession, authenticate } from '../../utils/auth';

function onClickSignOut(userProfile) {
  userProfile.save().then((url) => userSession.signUserOut()).then((url) => window.location = '/');
}

function onClickSignIn(userProfile) {
  authenticate();
}

function ButtonFillGreen(props) {
  const { userProfile } = props;

  if (userSession.isUserSignedIn())
  {
    return (
      <div className="button-sign-in-copy" onClick={() => onClickSignOut(userProfile)}>
        <div className="overlap-group1">
          <p className="label-1 smallfont-family-1centerblack-bold">Sign Out</p>
        </div>
      </div>);
  }
  else
  {
    return (
      <div className="button-sign-in-copy" onClick={() => onClickSignIn(userProfile)}>
        <div className="overlap-group1">
          <p className="label-1 smallfont-family-1centerblack-bold">Sign In</p>
        </div>
      </div>);
  }
}

export default ButtonFillGreen;
