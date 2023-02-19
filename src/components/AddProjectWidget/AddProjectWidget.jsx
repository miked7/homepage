import React, { useState, useEffect, useRef } from "react";
import 'react-select-search/style.css'
import "./AddProjectWidget.css";
import ActionButton from "../ActionButton/ActionButton"
import Button from "../Button/Button"
import IconButton from "../IconButton/IconButton";
import CloseIcon from './../../static/img/close_icon.png';
import { APP_DOMAIN, USER_DOMAIN } from "../../utils/environment";
import { getNameSubdomains } from "../../utils/names";
import SelectSearch from 'react-select-search';
import { getProfileList } from "../../user_profile/UserProfileFactory"
import Editor from "../Editor/Editor"
import { uploadFile } from './../../utils/file';
import UnknownProfileImage from './../../static/img/unknown_profile.png';
import ActivityImage from './../../static/img/activity_indicator.gif';

const AddProjectWidget = ({ userProfile, targetProject, onClose }) => {
    const [isDomainNameTargetProject, setIsDomainNameTargetProject] = useState(true);
    const [profileOptions, setProfileOptions] = useState([]);
    const [selectedValue, setSelectedValue] = useState("");
    const [otherImageUrl, setOtherImageUrl] = useState("");
    const [otherImageHash, setOtherImageHash] = useState(Date.now());
    const [otherUrl, setOtherUrl] = useState("");
    const [otherTitle, setOtherTitle] = useState("");
    const [otherDescription, setOtherDescription] = useState("");
    const [isImageBusy, setIsImageBusy] = useState(false);
    const imageUrlFilePicker = useRef(null)

    useEffect(() => {

        if (targetProject) {
            if (targetProject.ProfileId) {
                setIsDomainNameTargetProject(true);
                setOtherImageUrl(null);
                setOtherUrl(null);
                setOtherTitle(null);
                setOtherDescription(null);
            }
            else {
                setIsDomainNameTargetProject(false);
                setOtherImageUrl(targetProject.ImageUrl);
                setOtherUrl(targetProject.SiteUrl);
                setOtherTitle(targetProject.Name);
                setOtherDescription(targetProject.Description);
            }
        }

        // Need to create a function, fetchProfiles, to allow async function in useEffect.
        const fetchProfiles = async () => {
            const userProfiles = await getProfileList();
            const _names = userProfiles.map(p => ({name: p.UserId, value: p.UserId, profile: p}));
            setProfileOptions(_names);

            if (targetProject && targetProject.ProfileId) {
                setSelectedValue(targetProject.ProfileId);
            }
        };

        fetchProfiles().catch(err => console.log(err));
      }, []);

    const onIsHomepageTargetProject = e => {
        const target = e.target;
        if (target.checked) {
            if (target.value === "homepage-choice") {
                setIsDomainNameTargetProject(true);
            }
            else {
                setIsDomainNameTargetProject(false);
            }
        }
    };

    const OnSelectionChanged = (newSelection) => {
        setSelectedValue(newSelection);
    }

    const onImageUrlChooseImageLinkClick = () => {
        // `current` points to the mounted file input element
        imageUrlFilePicker.current.value = null;
        imageUrlFilePicker.current.click();
      };
    
      const imageUrlFilePickerOnChange = () => {
        setIsImageBusy(true);
        let fileInput = document.getElementById('project-image');
        uploadFile(fileInput.files[0], `project-${otherTitle}-image`)
          .then(url =>  {
            setOtherImageUrl(url);
            setOtherImageHash(Date.now());
            userProfile.save();
            setIsImageBusy(false);
          })
          .catch(error => {
            alert(error);
            setIsImageBusy(false);
          });
      };

    const OnConfirmButton = () => {
        var name;
        var desc;
        var imageUrl;
        var siteUrl;

        var selectedProfile = null;
        if (selectedValue) {
            const profileOption = profileOptions.find(n => n.name === selectedValue);
            selectedProfile = profileOption.profile;
        }

        if (isDomainNameTargetProject) {
            siteUrl = `https://${selectedProfile.UserId}`;
            name = selectedProfile.Name ? selectedProfile.Name : selectedProfile.UserId.replace(`.${APP_DOMAIN}`, ``);
            desc = selectedProfile.Description;
            imageUrl = selectedProfile.AvatarUrl ? selectedProfile.AvatarUrl : "";
        } else {
            siteUrl = otherUrl;
            name = otherTitle ? otherTitle : otherUrl;
            desc = otherDescription ? otherDescription : otherUrl;
            imageUrl = otherImageUrl ? otherImageUrl : "";
        }

        if (targetProject) {
            targetProject.Name = name;
            targetProject.Description = desc;
            targetProject.ImageUrl = imageUrl;
            targetProject.SiteUrl = siteUrl;
            targetProject.ProfileId = isDomainNameTargetProject ? selectedProfile.UserId : null;
        }
        else {
            if (isDomainNameTargetProject) {
                userProfile.addProject(name, desc, imageUrl, siteUrl, selectedProfile.UserId);
            }
            else {
                userProfile.addProject(name, desc, imageUrl, siteUrl);
            }
        }
        
        userProfile.save();
        onClose();
    };

    return (
        <div className="add-project-container">
            <div className="add-project-close-button-container">
                <IconButton icon={CloseIcon} onClick={() => onClose()} />
            </div>
            <div className="add-project-title">
                LINK
            </div>
            <div className="add-project-description">
            You can link to anything — A project or business, a friend, another mixmi profile.

Anthing with a URL!
            </div>
            <div className="add-project-radio-container">
                <input className="add-project-input-radio" type="radio" value="homepage-choice" name="options" onChange={onIsHomepageTargetProject} checked={isDomainNameTargetProject} />
                <div className="add-project-radio-description">
                    mixmi profile
                </div>
            </div>
            <div className="add-project-search">
            <SelectSearch
                search={true}
                options={profileOptions}
                value={selectedValue}
                onChange={OnSelectionChanged}
                disabled={!isDomainNameTargetProject || profileOptions.length == 0}
                getOptions={(query) => {
                    return new Promise((resolve, reject) => {
                        try {
                            if (query === '') {
                                resolve(profileOptions);    
                            } else {
                                const filteredNames = profileOptions.filter(i => i.name.includes(query));
                                resolve(filteredNames);
                            }
                        } catch(err) {
                            reject(err);
                        }
                    });
                }}
                placeholder="Choose profile"
            />
            </div>
            <div className="add-project-radio-container">
                <input className="add-project-input-radio" type="radio" value="other-choice" name="options" onChange={onIsHomepageTargetProject} checked={!isDomainNameTargetProject} />
                <div className="add-project-radio-description">
                    URL
                </div>
            </div>
            <div className="add-project-url-choose-image-container">
                <div className="add-project-url-choose-image">
                    { isImageBusy ? <img className="add-project-activity-image" src={ActivityImage} /> : <img className="add-project-url-choose-img" src={ otherImageUrl ? `${otherImageUrl}?${otherImageHash}` : UnknownProfileImage } /> }
                </div>
                <div className="add-project-url-choose-image-description">
                <input type='file' id='project-image' ref={imageUrlFilePicker} style={{display: 'none'}} onChange={imageUrlFilePickerOnChange} />
                <a style={{cursor: 'pointer'}} onClick={onImageUrlChooseImageLinkClick}>Choose an image</a>
                </div>
            </div>
            <div className="add-project-editor">
                <Editor initialValue={otherUrl} label="enter url" onChange={(newValue) => setOtherUrl(newValue)} isEnabled={!isDomainNameTargetProject} />
            </div>
            <div className="add-project-editor">
                <Editor initialValue={otherTitle} label="give it a title" onChange={(newValue) => setOtherTitle(newValue)} isEnabled={!isDomainNameTargetProject}/>
            </div>
            <div className="add-project-editor">
                <Editor initialValue={otherDescription} label="short description" onChange={(newValue) => setOtherDescription(newValue)} isEnabled={!isDomainNameTargetProject}/>
            </div>
            <div className="command-button-box">
                <div className="command-button">
                    <Button text="Cancel" onClick={() => onClose()} />
                </div>
                <div className="command-button">
                    <ActionButton text="Confirm" onClick={() => OnConfirmButton()} isEnabled={isDomainNameTargetProject ? (selectedValue) : (otherUrl && !isImageBusy)} />
                </div>
            </div>
        </div>
    );
  };
  
  export default AddProjectWidget;