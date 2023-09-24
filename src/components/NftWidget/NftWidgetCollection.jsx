import { React, useState, useEffect } from "react";
import "./NftWidgetCollection.css";
import AddWidgetIcon from './../../static/img/add-widget.png';
import UserProfile from "../../user_profile/UserProfile";
import AddWidgetButton from "../AddWidgetButton/AddWidgetButton";
import NftWidget from "./NftWidget"
import ReactModal from 'react-modal';
import EditPortfolioWidget from "../EditPortfolioWidget/EditPortfolioWidget";

const NftWidgetCollection = ({ userProfile }) => {
    const [nftItems, setNftItems] = useState(Array.from(userProfile.PortfolioItems.values()));

    useEffect(() => {
        userProfile.addListener(() => {
          let piArray = Array.from(userProfile.PortfolioItems.values());
          setPortfolioItems(piArray);
        })
      }, []);

  return (
      <div className="nft-widget-collection-container">
        <div className="nft-widget-collection-items-container">
            { portfolioItems.map((pi, index) => <NftWidget className="nft-widget" portfolioItem={pi} userProfile={userProfile} key={index} />) }
        </div>
      </div>);
}

export default NftWidgetCollection;
