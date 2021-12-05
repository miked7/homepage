import { React, useState } from "react";
import Social from "../Social";
import "./SocialRow.css";
import SocialMediaAccount from "../../user_profile/SocialMediaAccount";
import { useEffect } from "react/cjs/react.development";

function SocialRow(props) {
  const { userProfile } = props;
  const [socialMediaAccounts, setSocialMediaAccounts] = useState(Array.from(userProfile.SocialMediaAccounts, ([key, value]) => value));

  useEffect(() => {
    userProfile.addListener(() => {
      let smaArray = Array.from(userProfile.SocialMediaAccounts, ([key, value]) => value);
      setSocialMediaAccounts(smaArray);
    })
  }, []);

  return (
    <div className={`social-row`}>
      {  Array.from(socialMediaAccounts, ([key, value]) => value).map(sma => <Social socialMediaAccount={sma} />) }
    </div>
  );
}

export default SocialRow;
