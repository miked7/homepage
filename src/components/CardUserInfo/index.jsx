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
      <TextGourpSTXWallet
        stxWalletId={textGourpSTXWalletProps.stxWalletId}
        sp3P08Qbcvs8K93Mdv8Y={textGourpSTXWalletProps.sp3P08Qbcvs8K93Mdv8Y}
      />
      <UserfavoriteQuotedesktop userProfile={userProfile}/>
      <div className="social-stack">
        <SocialRow socialProps={socialRowProps.socialProps} social2Props={socialRowProps.social2Props} />
        <SocialRow
          className={socialRow2Props.className}
          socialProps={socialRow2Props.socialProps}
          social2Props={socialRow2Props.social2Props}
        />
      </div>
      <TextGroupCreatorIdDescr userProfile={userProfile}/>
    </div>
  );
}

export default CardUserInfo;
