import { React, useState, useEffect } from "react";
import "./PortfolioWidgetCollection.css";
import AddWidgetIcon from './../../static/img/add-widget.png';
import UserProfile from "../../user_profile/UserProfile";
import PortfolioItem from "../../user_profile/PortfolioItem";
import AddWidgetButton from "../AddWidgetButton/AddWidgetButton";
import PortfolioWidget from "./PortfolioWidget"
import ReactModal from 'react-modal';
import EditPortfolioWidget from "../EditPortfolioWidget/EditPortfolioWidget";

const PortfolioWidgetCollection = ({ userProfile }) => {
    const [portfolioItems, setPortfolioItems] = useState(Array.from(userProfile.PortfolioItems.values()));
    const [isPortfolioItemEditorOpen, setIsPortfolioItemEditorOpen] = useState(false);

    useEffect(() => {
        userProfile.addListener(() => {
          let piArray = Array.from(userProfile.PortfolioItems.values());
          setPortfolioItems(piArray);
        })
      }, []);

  return (
      <div className="portfolio-widget-collection-container">
        <div className="portfolio-widget-collection-items-container">
            { portfolioItems.map((pi, index) => <PortfolioWidget className="portfolio-widget" portfolioItem={pi} userProfile={userProfile} key={index} />) }
        </div>
        <div className="add-portfolio-widget-button">
            { userProfile.IsEditable ? <AddWidgetButton onClick={() => { setIsPortfolioItemEditorOpen(true) }} text={ userProfile.IsEditable ? "Add embed code for playlists, NFTs, videos and more" : ""} /> : <p hidden/> }
            <ReactModal className="edit-popup" isOpen={isPortfolioItemEditorOpen} contentLabel="Portfolio">
            <EditPortfolioWidget
                userProfile={userProfile}
                onClose={() => setIsPortfolioItemEditorOpen(false)} />
        </ReactModal>
        </div>
      </div>);
}

export default PortfolioWidgetCollection;
