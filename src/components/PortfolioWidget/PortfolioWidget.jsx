import React, { useState, useEffect, useRef } from "react";
import "./PortfolioWidget.css";
import AddWidgetIcon from './../../static/img/add-widget.png';
import PortfolioItem from "../../user_profile/PortfolioItem";
import EditIcon from './../../static/img/edit-16.png';
import DeleteIcon from './../../static/img/trash/trash-16.png';
import ReactModal from 'react-modal';
import EditPortfolioWidget from "../EditPortfolioWidget/EditPortfolioWidget";

const PortfolioWidget = ({ portfolioItem, userProfile }) => {
  const [isPortfolioItemEditorOpen, setIsPortfolioItemEditorOpen] = useState(false);

  return (
      <div className="portfolio-widget-container">
        <div className="portfolio-widget-edit-controls-container">
        { userProfile.IsEditable ? <img className="edit-icon-portfolio-widget" src={EditIcon} onClick={() => setIsPortfolioItemEditorOpen(true)} /> : <p hidden/> }
        { userProfile.IsEditable ? <img className="delete-icon-portfolio-widget" src={DeleteIcon} onClick={() => userProfile.removePortfolioItem(portfolioItem.Title)} /> : <p hidden/> }
        <ReactModal className="edit-popup" isOpen={isPortfolioItemEditorOpen} contentLabel="Portfolio">
            <EditPortfolioWidget 
                portfolioItem={portfolioItem}
                onClose={() => setIsPortfolioItemEditorOpen(false)} />
        </ReactModal>
        </div>
        <div className="portfolio-widget-content-container">
            <div className="portfolio-widget-title titleleft">{portfolioItem.Title}</div>
            <div className="portfolio-widget-description subtitles">{portfolioItem.Description}</div>
            <div className="portfolio-widget-code" dangerouslySetInnerHTML={{ __html: portfolioItem.WidgetCode }} />
        </div>
      </div>);
}

export default PortfolioWidget;
