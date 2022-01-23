import React from "react";
import "./EditSocialMediaAccounts.css";

const EditSocialMediaAccount = ({ icon, uid, onUidChange }) => {

    // const onChange = (event) => {
    //     uid = event.target.value;
    // }

    return (
        <div className="social-media-editor-container">
            <div className="social-media-editor-item">
                <input type="text" aria-label="Field name" defaultValue={uid} onChange={e => onUidChange(e.target.value)}/>
            </div>
            <div className="social-media-editor-icon">
                <img className="social-media-icon" src={icon} />
            </div>
        </div>
    );
}

export default EditSocialMediaAccount;