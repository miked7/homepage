import React from "react";
import "./ButtonBorderGreen.css";
import { getPerson, getUserData, userSession, authenticate } from '../../utils/auth';

function onClickSignOut(userProfile) {
  userProfile.save().then((url) => userSession.signUserOut()).then((url) => window.location = '/');
}

function onClickSignIn(userProfile) {
  authenticate();
}

function ButtonBorderGreen(props) {
  const { userProfile } = props;

  if (userSession.isUserSignedIn())
  {
    return (
      <div className="button-sign-in" onClick={() => onClickSignOut(userProfile)}>
        <div className="overlap-group">
          <p className="label smallfont-family-1centerblack-bold">Sign Out</p>
        </div>
      </div>);
  }
  else
  {
    return (
      <div className="button-sign-in" onClick={() => onClickSignIn(userProfile)}>
        <div className="overlap-group">
          <p className="label smallfont-family-1centerblack-bold">Sign In</p>
        </div>
      </div>);
  }
}

export default ButtonBorderGreen;
