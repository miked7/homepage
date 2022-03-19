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
    const [editingPortfolioItemId, setEditingPortfolioItemId] = useState(-1);

    useEffect(() => {
        userProfile.addListener(() => {
          let piArray = Array.from(userProfile.PortfolioItems.values());
          setPortfolioItems(piArray);
        })
      }, []);

      const onAddNewPortfolioItem = () => {
        var newPortfolioItemId = userProfile.addPortfolioItem("empty", "empty", "empty");
        setEditingPortfolioItemId(newPortfolioItemId);
        setIsPortfolioItemEditorOpen(true);
      }

  return (
      <div className="portfolio-widget-collection-container">
        <div className="portfolio-widget-collection-items-container">
            { portfolioItems.map(pi => <PortfolioWidget className="portfolio-widget" portfolioItem={pi} userProfile={userProfile} />) }
        </div>
        <div className="add-portfolio-widget-button">
            { userProfile.IsEditable ? <AddWidgetButton onClick={() => {onAddNewPortfolioItem();}} /> : <p hidden/> }
            <ReactModal className="edit-popup" isOpen={isPortfolioItemEditorOpen} contentLabel="Portfolio">
            <EditPortfolioWidget 
                portfolioItem={portfolioItems[editingPortfolioItemId]}
                onClose={() => setIsPortfolioItemEditorOpen(false)} />
        </ReactModal>
        </div>
      </div>);
}

export default PortfolioWidgetCollection;
