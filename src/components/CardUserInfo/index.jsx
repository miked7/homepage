import React from "react";
import TextGourpSTXWallet from "../TextGourpSTXWallet";
import UserfavoriteQuotedesktop from "../UserfavoriteQuotedesktop";
import SocialRow from "../SocialRow";
import TextGroupCreatorIdDescr from "../TextGroupCreatorIdDescr";
import "./CardUserInfo.css";

function CardUserInfo(props) {
  const {
    userProfile,
    textGourpSTXWalletProps,
    userfavoriteQuotedesktopProps,
    socialRowProps,
    socialRow2Props,
    textGroupCreatorIdDescrProps,
  } = props;

  return (
    <div className="card-user-info">
      <TextGourpSTXWallet userProfile={userProfile} />
      <UserfavoriteQuotedesktop userProfile={userProfile}/>
      <div className="social-stack">
        <SocialRow userProfile={userProfile} />
      </div>
      <TextGroupCreatorIdDescr userProfile={userProfile}/>
    </div>
  );
}

export default CardUserInfo;
