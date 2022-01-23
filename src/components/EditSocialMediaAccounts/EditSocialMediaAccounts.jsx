import React, { useState, useEffect, useRef } from "react";
import "./EditSocialMediaAccounts.css";
import TwitterIcon from './../../static/img/social-media-icons/Twitter.png';
import YouTubeIcon from './../../static/img/social-media-icons/YouTube.png';
import MixCloudIcon from './../../static/img/social-media-icons/Mixcloud.png';
import InstagramIcon from './../../static/img/social-media-icons/Instagram.png';
import TiktokIcon from './../../static/img/social-media-icons/Tiktok.png';
import EditSocialMediaAccount from './EditSocialMediaAccount';
import SocialMediaAccount from "../../user_profile/SocialMediaAccount";
import UserProfile from "../../user_profile/UserProfile";
import ActionButton from "../ActionButton/ActionButton"
import Button from "../Button/Button"
import IconButton from "../IconButton/IconButton";
import CloseIcon from './../../static/img/close_icon.png';

const EditSocialMediaAccounts = ({ userProfile, onCancel }) => {
    var twitterId = userProfile.SocialMediaAccounts.has('twitter') ? userProfile.SocialMediaAccounts.get('twitter').Uid : "";
    var youTubeId = userProfile.SocialMediaAccounts.has("youTube") ? userProfile.SocialMediaAccounts.get("youTube").Uid : "";
    var mixCloudId = userProfile.SocialMediaAccounts.has("mixCloud") ? userProfile.SocialMediaAccounts.get("mixCloud").Uid : "";
    var instagramId = userProfile.SocialMediaAccounts.has("instagram") ? userProfile.SocialMediaAccounts.get("instagram").Uid : "";
    var tiktokId = userProfile.SocialMediaAccounts.has("tiktok") ? userProfile.SocialMediaAccounts.get("tiktok").Uid : "";

    const onConfirm = () => {
        if (twitterId) {
            if (userProfile.SocialMediaAccounts.has("twitter")) {
                userProfile.SocialMediaAccounts.get("twitter").Uid = twitterId;
            } else {
                userProfile.addSocialMediaAccount("twitter", twitterId);
            }
        } else {
            userProfile.removeSocialMediaAccount("twitter");
        }
  
        if (youTubeId) {
            if (userProfile.SocialMediaAccounts.has("youTube")) {
                userProfile.SocialMediaAccounts.get("youTube").Uid = youTubeId;
            } else {
                userProfile.addSocialMediaAccount("youTube", youTubeId);
            }
        } else {
            userProfile.removeSocialMediaAccount("youTube");
        }

        if (mixCloudId) {
            if (userProfile.SocialMediaAccounts.has("mixCloud")) {
                userProfile.SocialMediaAccounts.get("mixCloud").Uid = mixCloudId;
            } else {
                userProfile.addSocialMediaAccount("mixCloud", mixCloudId);
            }
        } else {
            userProfile.removeSocialMediaAccount("mixCloud");
        }

        if (instagramId) {
            if (userProfile.SocialMediaAccounts.has("instagram")) {
                userProfile.SocialMediaAccounts.get("instagram").Uid = instagramId;
            } else {
                userProfile.addSocialMediaAccount("instagram", instagramId);
            }
        } else {
            userProfile.removeSocialMediaAccount("instagram");
        }

        if (tiktokId) {
            if (userProfile.SocialMediaAccounts.has("tiktok")) {
                userProfile.SocialMediaAccounts.get("tiktok").Uid = tiktokId;
            } else {
                userProfile.addSocialMediaAccount("tiktok", tiktokId);
            }
        } else {
            userProfile.removeSocialMediaAccount("tiktok");
        }

        onCancel();
    };

    return (
        <div className="all-stuff">
            <div className="close-button-container">
                <IconButton icon={CloseIcon} onClick={onCancel} />
            </div>
            <div className="title-and-text">
                <div className="social-bar title-font">Social Bar</div>
                <p className="paste-links-for-the description-font">Paste links for the social networks you want to display on your profile.</p>
            </div>
            <div className="edit-social-rows">
                <div className="edit-social-row">
                    <EditSocialMediaAccount icon={TwitterIcon} uid={twitterId} onUidChange={v => twitterId = v} />
                </div>
                <div className="edit-social-row">
                    <EditSocialMediaAccount icon={YouTubeIcon} uid={youTubeId} onUidChange={v => youTubeId = v} />
                </div>
                <div className="edit-social-row">
                    <EditSocialMediaAccount icon={MixCloudIcon} uid={mixCloudId} onUidChange={v => mixCloudId = v} />
                </div>
                <div className="edit-social-row">
                    <EditSocialMediaAccount icon={InstagramIcon} uid={instagramId} onUidChange={v => instagramId = v} />
                </div>
                <div className="edit-social-row">
                    <EditSocialMediaAccount icon={TiktokIcon} uid={tiktokId} onUidChange={v => tiktokId = v} />
                </div>
                <div className="command-button-box">
                    <div className="command-button">
                        <Button text="Cancel" onClick={() => onCancel()} />
                    </div>
                    <div className="command-button">
                        <ActionButton text="Confirm" onClick={() => onConfirm()} isEnabled={true}/>
                    </div>
                </div>
            </div>
        </div>
    );
  };
  
  export default EditSocialMediaAccounts;