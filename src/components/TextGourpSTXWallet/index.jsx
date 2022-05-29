import React, { useState, useEffect, useRef } from "react";
import "./TextGourpSTXWallet.css";
import EditIcon from './../../static/img/edit-16.png';
import ActionButton from "../ActionButton/ActionButton";
import ReactModal from 'react-modal';
import EditNftButton from "../EditNftButton/EditNftButton"
import { getPerson, getUserData, userSession, authenticate } from '../../utils/auth';

function TextGourpSTXWallet(props) {
  const { userProfile } = props;
  const [isNftCollectionButtonEditorOpen, setIsNftCollectionButtonEditorOpen] = useState(false);
  const [isDontateButtonEditorOpen, setIsDontateButtonEditorOpen] = useState(false);

  const [isNftCollectionButtonAvailable, setIsNftCollectionButtonAvailable] = useState(userProfile.IsNftCollectionButtonAvailable);
  const [isDontateButtonAvailable, setIsDonateButtonAvailable] = useState(userProfile.IsDonateButtonAvailable);

  useEffect(() => {
    userProfile.addListener(() => {
      setIsNftCollectionButtonAvailable(userProfile.IsNftCollectionButtonAvailable);
      setIsDonateButtonAvailable(userProfile.IsDonateButtonAvailable);
    })
  }, []);

  const onClickNftCollectionButton = () => {
    window.open(`https://gamma.io/${userProfile.StxId}`);
  };

  return (
    <div className="stacks-wallet">
      { userProfile.IsEditable ? <img className="edit-icon-nft-buttons" src={EditIcon} onClick={() => setIsNftCollectionButtonEditorOpen(true)} /> : <p hidden/> }
      <ReactModal className="edit-popup" isOpen={isNftCollectionButtonEditorOpen} contentLabel="Social Media">
        <EditNftButton 
          title="NFT FLEX BUTTON"
          description="Display your NFTs connected to this account."
          isShow={isNftCollectionButtonAvailable}
          buttonText="SHOW MY NFTs"
          onConfirm={(isAvailable) => { userProfile.IsNftCollectionButtonAvailable = isAvailable; setIsNftCollectionButtonEditorOpen(false); }}
          onCancel={() => setIsNftCollectionButtonEditorOpen(false)} />
      </ReactModal>
      <div className="nft-button-container">
        { isNftCollectionButtonAvailable || userProfile.IsEditable ? <ActionButton text="SEE MY NFTs" onClick={() => onClickNftCollectionButton()} isEnabled={isNftCollectionButtonAvailable} /> : <p hidden/> }
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
      <div className="nft-button-container">
      { isDontateButtonAvailable || userProfile.IsEditable ? <ActionButton text="GIMME STX" onClick={() => {}} isEnabled={isDontateButtonAvailable} /> : <p hidden/> }
      </div>
    </div>
  );
}

export default TextGourpSTXWallet;
