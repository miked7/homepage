import React, { useState, useEffect, useRef } from "react";
import { getPerson, getUserData, userSession, authenticate } from '../../utils/auth';
import "./SignInButton.css";

const SignInButton = ({ userProfile }) => {
  return (
    <div className="sign-in-button__container" onClick={() => authenticate()}>
      <div className="sign-in-button">
        <div className="sign-in-button__label smallfont-family-1centerblack-bold">Connect Wallet</div>
      </div>
    </div>
      );
}

export default SignInButton;
