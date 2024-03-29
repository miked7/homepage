import React, { useEffect, useState, useRef } from "react";
import TextBoxBio from "../TextBoxBio";
import "./CardAvatarAndBio.css";
import EditIcon from './../../static/img/edit-16.png';
import { uploadFile } from './../../utils/file';

function CardAvatarAndBio(props) {
  const { userProfile } = props;
  const [avatarUrl, setAvatarUrl] = useState('');
  

  useEffect(() => {
    userProfile.addListener(() => {
      setAvatarUrl(userProfile.AvatarUrl !== "" ? userProfile.AvatarUrl : "https://picsum.photos/300");
    })
  }, []);
  // TODO - Remove this, set explicitly on user edit action.  
  // useEffect(() => {
  //   userProfile.AvatarUrl = avatarUrl;
  //   userProfile.Biography = biography;
  //   }, [avatarUrl, biography]);
  const avatarFilePicker = useRef(null)
  const avatarFilePickerClick = () => {
    // `current` points to the mounted file input element
    avatarFilePicker.current.value = null;
    avatarFilePicker.current.click();
  };

  const avatarFilePickerOnChange = () => {
    let fileInput = document.getElementById('file');
    uploadFile(fileInput.files[0], "avatar")
      .then(url =>  {
        userProfile.AvatarUrl = url;
        userProfile.save();
      })
      .catch(error => {
        alert(error);
      });
  };

  return (
    <div className="card-avatar-and-bio">
      <div className="image-container">
        <img className="image-avatar" src={avatarUrl} />
        <input type='file' id='file' ref={avatarFilePicker} style={{display: 'none'}} onChange={avatarFilePickerOnChange} />
        { userProfile.IsEditable ? <img className="edit-icon" src={EditIcon} onClick={avatarFilePickerClick} /> : <p hidden/> }
      </div>
    </div>
  );
}

export default CardAvatarAndBio;
