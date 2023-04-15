import React from "react";
import TextGourpSTXWallet from "../TextGourpSTXWallet";
import UserfavoriteQuotedesktop from "../UserfavoriteQuotedesktop";
import SocialRow from "../SocialRow";
import TextGroupCreatorIdDescr from "../TextGroupCreatorIdDescr";
import "./CardUserInfo.css";
import TextBoxBio from "../TextBoxBio";

function CardUserInfo(props) {
  const {
    userProfile,
  } = props;

  return (
    <div className="card-user-info">
      <TextGroupCreatorIdDescr userProfile={userProfile}/>
      <div className="bio-container">
        <TextBoxBio userProfile={userProfile} />
      </div>
      <div className="social-stack">
        <SocialRow userProfile={userProfile} />
      </div>
      <UserfavoriteQuotedesktop userProfile={userProfile}/>
      <TextGourpSTXWallet userProfile={userProfile} />
    </div>
  );
}

export default CardUserInfo;
