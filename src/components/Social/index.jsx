import React from "react";
import Brandstwitter from "../Brandstwitter";
import TwitterIcon from './../../static/img/social-media-icons/Twitter.png';
import LinkedInIcon from './../../static/img/social-media-icons/LinkedIn.png';
import InstagramIcon from './../../static/img/social-media-icons/Instagram.png';
import YouTubeIcon from './../../static/img/social-media-icons/YouTube.png';
import MixCloudIcon from './../../static/img/social-media-icons/Mixcloud.png';
import TikTokIcon from './../../static/img/social-media-icons/Tiktok.png';
import SocialMediaAccount from "../../user_profile/SocialMediaAccount";
import "./Social.css";

function Social(props) {
  const { socialMediaAccount } = props;

  const getIcon = () => {
    switch (socialMediaAccount.Provider) {
      case "twitter":
        return TwitterIcon;

      case "instagram":
        return InstagramIcon;

      case "mixCloud":
        return MixCloudIcon;

      case "youTube":
        return YouTubeIcon;

      case "tiktok":
        return TikTokIcon;

      default:
        return TwitterIcon;
    }
  }

  return (
    <div className={`social-2`}>
      <div className="stacked-group">
      <img className="icon-style" src={getIcon()} />
        <div className="social-handle profile-description">{socialMediaAccount.Uid}</div>
      </div>
    </div>
  );
}

export default Social;
