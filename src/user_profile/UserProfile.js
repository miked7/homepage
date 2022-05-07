import { Storage } from '@stacks/storage';
import { getPerson, getUserData, userSession, authenticate } from '../utils/auth';
import { readPublicStorageFile } from '../utils/file';
import SocialMediaAccount from './SocialMediaAccount';
import Project from './Project';
import PortfolioItem from './PortfolioItem';

const USER_PROFILE_FILENAME = "UserProfile.json";

const storage = new Storage({ userSession });

class UserProfile {
    #userId;
    #domain;

    constructor(userId, domain) {
      this.#userId = userId;
      this.#domain = domain;

      this.name = '';
      this.description = '';
      this.quote = '';
      this.stxId = '';
      this.avatarUrl = '';
      this.title = '';
      this.biography = '';
      this.isNftCollectionButtonAvailable = true;
      this.isDonateButtonAvailable = true;
      this.socialMediaAccounts = new Map();
      this.projects = new Map();
      this.portfolioItems = new Map();

      this.listeners = [];
    }

    get IsEditable() {
        return userSession.isUserSignedIn();
    }

    // Name
    get Name() {
        return this.name;
    }

    set Name(value) {
        if (this.name !== value) {
            this.name = value;
            this.listeners.forEach(l => l());
        }
    }

    // Description
    get Description() {
        return this.description;
    }

    set Description(value) {
        if (this.description != value) {
            this.description = value;
            this.listeners.forEach(l => l());
        }
    }

    // Quote
    get Quote() {
        return this.quote;
    }

    set Quote(value) {
        if (this.quote != value) {
            this.quote = value;
            this.listeners.forEach(l => l());
        }
    }

    // StxId
    get StxId() {
        return this.stxId;
    }

    set StxId(value) {
        if (this.stxId != value) {
            this.stxId = value;
            this.listeners.forEach(l => l());
        }
    }

    // AvatarUrl
    get AvatarUrl() {
        return this.avatarUrl;
    }

    set AvatarUrl(value) {
        if (this.avatarUrl !== value) {
            this.avatarUrl = value;
            this.listeners.forEach(l => l());
        }
    }

    // Title
    get Title() {
        return this.title;
    }

    set Title(value) {
        if (this.title !== value) {
            this.title = value;
            this.listeners.forEach(l => l());
        }
    }

    // Biography
    get Biography() {
        return this.biography;
    }

    set Biography(value) {
        if (this.biography !== value) {
            this.biography = value;
            this.listeners.forEach(l => l());
        }
    }

    get IsNftCollectionButtonAvailable() {
        return this.isNftCollectionButtonAvailable;
    }

    set IsNftCollectionButtonAvailable(value) {
        if (this.isNftCollectionButtonAvailable != value)
        {
            this.isNftCollectionButtonAvailable = value;
            this.listeners.forEach(l => l());
        }
    }

    get IsDonateButtonAvailable() {
        return this.isDonateButtonAvailable;
    }

    set IsDonateButtonAvailable(value) {
        if (this.isDonateButtonAvailable != value)
        {
            this.isDonateButtonAvailable = value;
            this.listeners.forEach(l => l());
        }
    }

    // SocialMediaAccounts
    get SocialMediaAccounts() {
        return this.socialMediaAccounts;
    }
    
    addSocialMediaAccount = (provider, uid) => {
        this.socialMediaAccounts.set(provider, new SocialMediaAccount(provider, uid));
        this.listeners.forEach(l => l());
    }

    removeSocialMediaAccount = (provider) => {
        this.socialMediaAccounts.delete(provider);
        this.listeners.forEach(l => l());
    }

    // Projects
    get Projects() {
        return this.projects;
    }
 
    addProject = (name, description, imageUrl, siteUrl) => {
        var id = this.projects.size;
        this.projects.set(id, new Project(id, name, description, imageUrl, siteUrl));
        this.listeners.forEach(l => l());
    }

    removeProject = (id) => {
        this.projects.delete(id);
        this.listeners.forEach(l => l());
    }

    // PortfolioItems
    get PortfolioItems() {
        return this.portfolioItems;
    }

    addPortfolioItem = (title, description, widgetCode) => {
        var id = this.portfolioItems.size;
        this.portfolioItems.set(id, new PortfolioItem(id, title, description, widgetCode));
        this.listeners.forEach(l => l());
        return id;
    }

    removePortfolioItem = (id) => {
        this.portfolioItems.delete(id);
        this.listeners.forEach(l => l());
    }

    load = () => {
        console.log(`Loading user profile for userId [${this.#userId}] at domain [${this.#domain}].`);
        let fullyQualifiedUserId = `${this.#userId}.${this.#domain}`;

        if (userSession.isUserSignedIn()) {
            let conf = userSession;
            let data = getUserData();

            const options = {
                decrypt: false,
            };

            storage.getFile(USER_PROFILE_FILENAME, options).then(data => {

                let dataObject = JSON.parse(data);
    
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
            }).catch(error => {
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
            });
        }
        else {
            // // The below code is not working at the moment due to a bug in the Stacks Storage library.
            // // For now we will work around using the readUserProfile function.
            // //
            // // const options = {
            // //     decrypt: false,
            // //     verify: false,
            // //     username: fullyQualifiedUserId,
            // //     app: "http://localhost:3000",
            // //     //zoneFileLookupURL: 'https://core.blockstack.org/v1/names/'
            // // };

            // // storage.getFile(USER_PROFILE_FILENAME, options)
            // //     .then(data => {

            // //         let dataObject = JSON.parse(data);
        
            // //         this.name = dataObject.Name;
            // //         this.description = dataObject.Description;
            // //         this.quote = dataObject.Quote;
            // //         this.stxId = dataObject.StxId;
            // //         this.avatarUrl = dataObject.AvatarUrl;
            // //         this.title = dataObject.Title;
            // //         this.biography = dataObject.Biography;
        
            // //         this.socialMediaAccounts.clear();
            // //         dataObject.SocialMediaAccounts.forEach(sma => this.socialMediaAccounts[sma.Provider] = new SocialMediaAccount(sma.Provider, sma.Uid));
        
            // //         this.projects.clear();
            // //         dataObject.Projects.forEach(p => this.projects[p.Name] = new Project(p.Name, p.ImageUrl, p.SiteUrl));
        
            // //         this.portfolioItems.clear();
            // //         dataObject.PortfolioItems.forEach(pi => this.portfolioItems[pi.Title] = new PortfolioItem(pi.Title, pi.Description, pi.WidgetCode));
        
            // //         this.listeners.forEach(l => l());
            // //     })
            // //     .catch((error) => {
            // //         console.log("Filed to load user profile: " + error);
            // //     })
            // //     .finally(() => {
            // //     });    

            readPublicStorageFile(fullyQualifiedUserId, USER_PROFILE_FILENAME).then(dataObject => {
                //let dataObject = JSON.parse(data);
    
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
            }).catch(error => {
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
            });
        }        
    }

    save = () => {

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

    setDefault = () => {

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

    addListener = (listener) => {
        this.listeners.push(listener);
    }
  }

  export default UserProfile;