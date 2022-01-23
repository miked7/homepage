import { React, useState } from "react";
import ReactModal from 'react-modal';
import Social from "../Social";
import "./SocialRow.css";
import SocialMediaAccount from "../../user_profile/SocialMediaAccount";
import { useEffect } from "react/cjs/react.development";
import EditIcon from './../../static/img/edit-16.png';
import EditSocialMediaAccounts from '../EditSocialMediaAccounts/EditSocialMediaAccounts';

function SocialRow(props) {
  const { userProfile } = props;
  const [socialMediaAccounts, setSocialMediaAccounts] = useState(Array.from(userProfile.SocialMediaAccounts.values()));
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    userProfile.addListener(() => {
      let smaArray = Array.from(userProfile.SocialMediaAccounts.values());
      setSocialMediaAccounts(smaArray);
    })
  }, []);

  const editOnClick = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className={`social-row`}>
      {  socialMediaAccounts.map(sma => <Social socialMediaAccount={sma} />) }
      { userProfile.IsEditable ? <img className="edit-icon" src={EditIcon} onClick={editOnClick} /> : <p hidden/> }
      <ReactModal className="edit-popup" isOpen={isEditing} contentLabel="Social Media">
        <EditSocialMediaAccounts userProfile={userProfile} onCancel={() => setIsEditing(false)} />
        {/* <button onClick={() => setIsEditing(false)}>OK</button> */}
      </ReactModal>
    </div>
  );
}

export default SocialRow;
