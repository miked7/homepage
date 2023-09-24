import React, { useState, useEffect, useRef } from "react";
import "./NftWidget.css";
import AddWidgetIcon from './../../static/img/add-widget.png';
import PortfolioItem from "../../user_profile/PortfolioItem";
import EditIcon from './../../static/img/edit-16.png';
import DeleteIcon from './../../static/img/trash/trash-16.png';
import ReactModal from 'react-modal';
import EditPortfolioWidget from "../EditPortfolioWidget/EditPortfolioWidget";

const NftWidget = ({ portfolioItem, userProfile }) => {
  const [isPortfolioItemEditorOpen, setIsPortfolioItemEditorOpen] = useState(false);

  return (
      <div className="nft-widget-container">
        <div className="nft-widget-content-container">
        </div>
      </div>);
}

export default NftWidget;
