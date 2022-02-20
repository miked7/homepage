import { React, useState, useEffect } from "react";
import "./PortfolioWidgetCollection.css";
import AddWidgetIcon from './../../static/img/add-widget.png';
import UserProfile from "../../user_profile/UserProfile";
import PortfolioItem from "../../user_profile/PortfolioItem";
import AddWidgetButton from "../AddWidgetButton/AddWidgetButton";
import PortfolioWidget from "./PortfolioWidget"
import ReactModal from 'react-modal';

const PortfolioWidgetCollection = ({ userProfile }) => {
    const [portfolioItems, setPortfolioItems] = useState(Array.from(userProfile.PortfolioItems.values()));

    useEffect(() => {
        userProfile.addListener(() => {
          let piArray = Array.from(userProfile.PortfolioItems.values());
          setPortfolioItems(piArray);
        })
      }, []);

  return (
      <div className="portfolio-widget-collection-container">
        <div className="portfolio-widget-collection-items-container">
            { portfolioItems.map(pi => <PortfolioWidget className="portfolio-widget" portfolioItem={pi} userProfile={userProfile} />) }
        </div>
        <div className="add-portfolio-widget-button">
            <AddWidgetButton onClick={() => {}} />
        </div>
      </div>);
}

export default PortfolioWidgetCollection;
