import React, { useState, useEffect, useRef } from "react";
import InlineEditor2 from "../InlineEditor/InlineEditor2"
import "./TextBoxBio.css";

function TextBoxBio(props) {
  const { userProfile } = props;
  const [biography, setBiography] = useState('');

  useEffect(() => {
    userProfile.addListener(() => {
      setBiography(userProfile.Biography);
    })
  }, []);

  return (
    <div className="text-box-bio">
      <InlineEditor2 value={biography} setValue={(bio) => userProfile.Biography = bio} userProfile={userProfile} />
    </div>
  );
}

export default TextBoxBio;
