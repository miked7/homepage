import React, { useEffect, useState } from "react";
import InlineEditor2 from "../InlineEditor/InlineEditor2"
import "./TextGroupCreatorIdDescr.css";

function TextGroupCreatorIdDescr(props) {
  const { userProfile } = props;
  const [name, setName] = useState(userProfile.Name);
  const [description, setDescription] = useState(userProfile.Description);

  useEffect(() => {
    userProfile.addListener(() => {
      setName(userProfile.Name);
      setDescription(userProfile.Description);
    })
  }, []);

  return (
    <div className="creator-id-container">
      <div className="creator-id-stack">
        <div className="creator-title artist-namedesktop">
          <InlineEditor2 value={name} defaultValue="click to edit name" setValue={(nm) => userProfile.Name = nm} userProfile={userProfile} />
        </div>
        <div className="creator-description">
          <InlineEditor2 value={description} defaultValue="click to edit title" setValue={(ds) => userProfile.Description = ds} userProfile={userProfile} />
        </div>
        {/* <h1 className="title-2 artist-namedesktop">{title}</h1> */}
        {/* <div className="creator-description">{creatorDescription}</div> */}
      </div>
    </div>
  );
}

export default TextGroupCreatorIdDescr;
