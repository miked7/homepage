import Profile from "./Profile";
import { getDomain, getSubdomain } from "../utils/url"
import { DEBUG_USER_NAME, USER_DOMAIN, isDebug } from "../utils/environment"
import { prettyFormat } from "@testing-library/react";
import { readPublicStorageFile } from '../utils/file';

const loadPrivateProfile = (fullyQualifiedUserId, stxId) => {
    const options = {
        decrypt: false,
    };

    storage.getFile(USER_PROFILE_FILENAME, options)
    .then(data => {
        let dataObject = JSON.parse(data);
        initProperties(dataObject);
        this.StxId = stxId; // HACK - Overwrite Stacks Id.
    })
    .catch(err => {
        console.log(err)
        initPropertiesEmpty(fullyQualifiedUserId);
    });
}

const loadPublicProfile = (fullyQualifiedUserId) => {
    readPublicStorageFile(fullyQualifiedUserId, USER_PROFILE_FILENAME)
    .then(dataObject => {
        initProperties(dataObject);
    })
    .catch(err => {
        console.log(err);
        initPropertiesEmpty(fullyQualifiedUserId);
    });
}

const initProperties = (dataObject) => {
    this.name = dataObject.Name;
    this.description = dataObject.Description;
    this.quote = dataObject.Quote;
    this.stxId = dataObject.StxId;
    this.avatarUrl = dataObject.AvatarUrl;
    this.title = dataObject.Title;
    this.biography = dataObject.Biography;
    this.isNftCollectionButtonAvailable = dataObject.IsNftCollectionButtonAvailable;
    this.isDonateButtonAvailable = dataObject.IsDonateButtonAvailable;

    this.socialMediaAccounts.clear();
    dataObject.SocialMediaAccounts.forEach(sma => this.socialMediaAccounts.set(sma.Provider, new SocialMediaAccount(sma.Provider, sma.Uid)));

    this.projects.clear();
    dataObject.Projects.forEach(p => this.projects.set(p.Id, new Project(p.Id, p.Name, p.Description, p.ImageUrl, p.SiteUrl)));

    this.portfolioItems.clear();
    dataObject.PortfolioItems.forEach(pi => this.portfolioItems.set(pi.Id, new PortfolioItem(pi.Id, pi.Title, pi.Description, pi.WidgetCode)));

    this.listeners.forEach(l => l());
}

const initPropertiesEmpty = (fullyQualifiedUserId) => {
    this.name = fullyQualifiedUserId;
    this.description = "";
    this.quote = "";
    this.stxId = "";
    this.avatarUrl = "";
    this.title = "";
    this.biography = "";
    this.isNftCollectionButtonAvailable = true;
    this.isDonateButtonAvailable = true;

    this.socialMediaAccounts.clear();

    this.projects.clear();

    this.portfolioItems.clear();

    this.listeners.forEach(l => l());
}

const load = () => {
    console.log(`Loading user profile for userId [${this.#userId}] at domain [${this.#domain}].`);
    let fullyQualifiedUserId = `${this.#userId}.${this.#domain}`;

    if (userSession.isUserSignedIn()) {
        let stxUserData = getUserData();
        getBnsNamesForAddress(stxUserData.profile.stxAddress.mainnet)
            .then(bnsNames => {
                if (bnsNames.includes(fullyQualifiedUserId)) {
                    loadPrivateProfile(fullyQualifiedUserId, stxUserData.profile.stxAddress.mainnet);
                    this.IsEditable = true;
                }
                else {
                    loadPublicProfile(fullyQualifiedUserId);
                    this.IsEditable = false;
                }
            })
            .catch(err =>  {
                console.log(err);
                this.IsEditable = false;
            });
    }
    else {
        loadPublicProfile(fullyQualifiedUserId);
        this.IsEditable = false;
    }
}

const save = () => {

    if (userSession.isUserSignedIn()) {
        let userProfile;

        var _socialMediaAccounts = [];

        this.SocialMediaAccounts.forEach((value) => {
            _socialMediaAccounts.push({Provider: value.Provider, Uid: value.Uid});
        });
        
        var _projects = [];
    
        this.Projects.forEach((value) => {
            _projects.push({Id: value.Id, Name: value.Name, Description: value.Description, ImageUrl: value.ImageUrl, SiteUrl: value.SiteUrl});
        });

        var _portfolioItems = []; //Array.from(this.PortfolioItems.values());
    
        this.PortfolioItems.forEach((value) => {
            _portfolioItems.push({Id: value.Id, Title: value.Title, Description: value.Description, WidgetCode: value.WidgetCode});
        });

        userProfile = {
            Name : this.name,
            Description : this.description,
            Quote : this.quote,
            StxId : this.stxId,
            AvatarUrl : this.avatarUrl,
            Title : this.title,
            Biography : this.biography,
            IsNftCollectionButtonAvailable : this.isNftCollectionButtonAvailable,
            IsDonateButtonAvailable: this.isDonateButtonAvailable,
            SocialMediaAccounts : _socialMediaAccounts,
            Projects : _projects,
            PortfolioItems : _portfolioItems
        }

        const options = {
            encrypt: false,
        };
        
        return Promise.resolve(storage.putFile(USER_PROFILE_FILENAME, JSON.stringify(userProfile), options));
    }
    else {
        return Promise.resolve(() => {console.log("Unexpected UserProfile.save().")});
    }
    
}

const setDefault = () => {
    if (userSession.isUserSignedIn()) {
        const options = {
        encrypt: false,
    };

    return storage.deleteFile(USER_PROFILE_FILENAME, options)
        .then(url => {
            alert("User profile deleted.")
        })
        .catch(error => {
            alert("Failed to delete user profile.")
        });
    }
}

export const createProfile = (name) =>  {
    if (isDebug()) {
        return new Profile(DEBUG_USER_NAME, USER_DOMAIN);
    }
    else {
        return new Profile(getSubdomain(), USER_DOMAIN);
    }
};

const updateProfileCache = (name) => {

    return readPublicStorageFile(name, USER_PROFILE_FILENAME)
        .then(dataObject => {
            console.log(`Creating cache with user [${name}] profile data.`);
            profileMap[name] = { lastUpdateTime: Date.now, data: dataObject };
            localStorage.setItem("profile_cache", JSON.stringify(profileMap));
            return dataObject;
        })
        .catch(err => {
            reject(`Failed to update cache with user [${name}] profile data [${err}].`)
            return null;
        });
}

export const fetchProfileData = (name) => {

    let profileCache = localStorage.getItem("profile_cache");
    if (profileCache !== null) {
        profileMap = JSON.parse(profileCache);
        if (profileMap.has(name)) {
            console.log(`Cache hit for user [${name}].`);
            return new Promise((resolve) => resolve(profileMap[name].data)); ;
        }
    }

    return readPublicStorageFile(name, USER_PROFILE_FILENAME)
        .then(data => {
            console.log(`Cache miss for user [${name}], updating cache...`);
            profileMap[name] = { lastUpdateTime: Date.now, data: data };
            localStorage.setItem("profile_cache", JSON.stringify(profileMap));
            return data;
        })
        .catch(err => {
            reject(`Failed to update cache with user [${name}] profile data [${err}].`)
            return null;
        });
}