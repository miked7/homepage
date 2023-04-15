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

  const getUrl = () => {
    switch (socialMediaAccount.Provider) {
      case "twitter":
        return "http://www.twitter.com/";

      case "instagram":
        return "http://www.instagram.com/";

      case "mixCloud":
        return "https://www.mixcloud.com/";

      case "youTube":
        return "https://www.youtube.com/";

      case "tiktok":
        return "https://www.tiktok.com/";

      default:
        return "http://www.twitter.com/";
    }
  }

  return (
    <div className={`social-2`}>
      <div className="stacked-group" onClick={()=> window.open(socialMediaAccount.Uid.includes("http") ? socialMediaAccount.Uid : getUrl(), "_blank")}>
      <img className="icon-style" src={getIcon()} />
      <a className="social-handle profile-description">
        {
          socialMediaAccount.Uid.lastIndexOf('/') > 0 ? socialMediaAccount.Uid.substring(socialMediaAccount.Uid.lastIndexOf('/')+1) : socialMediaAccount.Uid
          }</a>
      </div>
    </div>
  );
}

export default Social;
