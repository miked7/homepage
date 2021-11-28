import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import HomeDesktopHD from "./components/HomeDesktopHD";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <HomeDesktopHD {...homeDesktopHDData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const textBoxBioData = {
    children: "Creator bio Creator bioCreator bioCreator bioCreator bioCreator bioCreator bioCreator bioCreator bio",
};

const cardAvatarAndBioData = {
    imageAvatar: "/img/homedesktop-hd-imageavatar-388710F5-75E0-4B18-AD42-CA030F6CAD8E.jpg",
    textBoxBioProps: textBoxBioData,
};

const textGourpSTXWalletData = {
    stxWalletId: "STX Account ID",
    sp3P08Qbcvs8K93Mdv8Y: "SP9P08QACVS8K93MDV8YVZ9H3009AC5B8TA67WH4N",
};

const userfavoriteQuotedesktopData = {
    spanText: `"Favorite `,
    spanText2: `quote favorite quote favorite quote favorite quote favorite quote favorite quote"`,
};

const brandstwitterData = {
    src: "/img/desktopuser-profile-copy-2-ud83cudfa8-icon-style-C44C7390-15AD-4752-B977-C70D4A005BE0@2x.png",
};

const socialData = {
    socialHandle: "social handle",
    brandstwitterProps: brandstwitterData,
};

const brandstwitter2Data = {
    src: "/img/desktopuser-profile-copy-2-ud83cudfa8-icon-style-C44C7390-15AD-4752-B977-C70D4A005BE0@2x.png",
};

const social2Data = {
    socialHandle: "social handle",
    className: "social-1",
    brandstwitterProps: brandstwitter2Data,
};

const socialRowData = {
    socialProps: socialData,
    social2Props: social2Data,
};

const brandstwitter3Data = {
    src: "/img/desktopuser-profile-copy-2-ud83cudfa8-icon-style-C44C7390-15AD-4752-B977-C70D4A005BE0@2x.png",
};

const social3Data = {
    socialHandle: "social handle",
    brandstwitterProps: brandstwitter3Data,
};

const brandstwitter4Data = {
    src: "/img/desktopuser-profile-copy-2-ud83cudfa8-icon-style-C44C7390-15AD-4752-B977-C70D4A005BE0@2x.png",
};

const social4Data = {
    socialHandle: "social handle",
    className: "social-1",
    brandstwitterProps: brandstwitter4Data,
};

const socialRow2Data = {
    className: "social-row-1",
    socialProps: social3Data,
    social2Props: social4Data,
};

const textGroupCreatorIdDescrData = {
    title: "Creator Identity",
    creatorDescription: "creator description",
};

const cardUserInfoData = {
    textGourpSTXWalletProps: textGourpSTXWalletData,
    userfavoriteQuotedesktopProps: userfavoriteQuotedesktopData,
    socialRowProps: socialRowData,
    socialRow2Props: socialRow2Data,
    textGroupCreatorIdDescrProps: textGroupCreatorIdDescrData,
};

const cardProject2Data = {
    className: "card-project-1",
};

const widgetMediaEmbedSoundcloud2Data = {
    className: "widget-embed-soundcloud-1",
};

const widgetMediaEmbedSoundcloud3Data = {
    className: "widget-embed-youtube",
};

const widgetMediaEmbedSoundcloud4Data = {
    className: "widget-embed",
};

const faviconuser32pxData = {
    src: "/img/homedesktop-hd-sandy-2006-no-bg-C937D3D3-5AF0-4588-8E0E-ED9A66597B55@2x.png",
};

const buttonBorderGreenData = {
    children: "SIGN IN",
};

const buttonFillGreenData = {
    children: "GET YOUR WEB 3 PROFILE PAGE",
};

const homeDesktopHDData = {
    title: "TITLE",
    title2: "TITLE",
    title3: "TITLE",
    cardAvatarAndBioProps: cardAvatarAndBioData,
    cardUserInfoProps: cardUserInfoData,
    cardProjectProps: cardProject2Data,
    widgetMediaEmbedSoundcloudProps: widgetMediaEmbedSoundcloud2Data,
    widgetMediaEmbedSoundcloud2Props: widgetMediaEmbedSoundcloud3Data,
    widgetMediaEmbedSoundcloud3Props: widgetMediaEmbedSoundcloud4Data,
    faviconuser32pxProps: faviconuser32pxData,
    buttonBorderGreenProps: buttonBorderGreenData,
    buttonFillGreenProps: buttonFillGreenData,
};

