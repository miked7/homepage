import React, { useState, useEffect, useRef } from "react";
import "./TextGourpSTXWallet.css";
import EditIcon from './../../static/img/edit-16.png';
import ActionButton from "../ActionButton/ActionButton";
import ReactModal from 'react-modal';
import EditNftButton from "../EditNftButton/EditNftButton"
import { getPerson, getUserData, userSession, authenticate } from '../../utils/auth';
import CopyIcon from './../../static/img/copy-16.png';

function TextGourpSTXWallet(props) {
  const { userProfile } = props;
  const [isNftCollectionButtonEditorOpen, setIsNftCollectionButtonEditorOpen] = useState(false);
  const [isDontateButtonEditorOpen, setIsDontateButtonEditorOpen] = useState(false);

  const [isNftCollectionButtonAvailable, setIsNftCollectionButtonAvailable] = useState(userProfile.IsNftCollectionButtonAvailable);
  const [isDontateButtonAvailable, setIsDonateButtonAvailable] = useState(userProfile.IsDonateButtonAvailable);

  useEffect(() => {
    let callback = () => {
      setIsNftCollectionButtonAvailable(userProfile.IsNftCollectionButtonAvailable);
      setIsDonateButtonAvailable(userProfile.IsDonateButtonAvailable);
      };
    userProfile.addListener(callback);
    return (callback) => userProfile.removeListener(callback);
  }, []);

  const onClickNftCollectionButton = () => {
    window.open(userProfile.NftMarketplaceUrl);
  };

  return (
    <div className="stacks-wallet">
      <div className="nft-button-container">
        <div className="nft-button">
          { isNftCollectionButtonAvailable || userProfile.IsEditable ? <ActionButton text="SEE MY NFTs" onClick={() => onClickNftCollectionButton()} isEnabled={isNftCollectionButtonAvailable} /> : <p hidden/> }
        </div>
        { userProfile.IsEditable ? <img className="edit-icon-nft-buttons" src={EditIcon} onClick={() => setIsNftCollectionButtonEditorOpen(true)} /> : <p hidden/> }
        <ReactModal className="edit-popup" isOpen={isNftCollectionButtonEditorOpen} contentLabel="Social Media">
          <EditNftButton 
            userProfile={userProfile}
            title="NFT FLEX BUTTON"
            description="Display your NFTs connected to this account."
            isShow={isNftCollectionButtonAvailable}
            buttonText="SEE MY NFTs"
            onConfirm={(isAvailable) => { userProfile.IsNftCollectionButtonAvailable = isAvailable; setIsNftCollectionButtonEditorOpen(false); }}
            onCancel={() => setIsNftCollectionButtonEditorOpen(false)} />
        </ReactModal>
      </div>
      
      <div className="stx-id-container">
        <div className="stx-id">
          { userProfile.StxId.substr(0, 3) + "..." + userProfile.StxId.substr(userProfile.StxId.length - 3, userProfile.StxId.length - 1) }
        </div>
        <div className="stx-id-copy">
          <img className="stx-id-copy-img" src={CopyIcon} onClick={() => navigator.clipboard.writeText(userProfile.StxId)} />
        </div>
      </div>

      {/* <div className="nft-button-container">
        <div className="nft-button">
          { isDontateButtonAvailable || userProfile.IsEditable ? <ActionButton text="GIMME STX" onClick={() => {}} isEnabled={isDontateButtonAvailable} /> : <p hidden/> }
        </div>
        { userProfile.IsEditable ? <img className="edit-icon-nft-buttons" src={EditIcon} onClick={() => setIsDontateButtonEditorOpen(true)} /> : <p hidden/> }
        <ReactModal className="edit-popup" isOpen={isDontateButtonEditorOpen} contentLabel="Social Media">
          <EditNftButton 
            title="SEND ME STX BUTTON"
            description="Give people the option to send you funds... or not."
            isShow={isDontateButtonAvailable}
            buttonText="GIMME STX"
            onConfirm={(isAvailable) => { userProfile.IsDonateButtonAvailable = isAvailable; setIsDontateButtonEditorOpen(false); }}
            onCancel={() => setIsDontateButtonEditorOpen(false)} />
        </ReactModal>
      </div> */}
    </div>
  );
}

export default TextGourpSTXWallet;
