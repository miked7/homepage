import { Storage } from '@stacks/storage';
import { getPerson, getUserData, userSession, authenticate } from '../utils/auth';
import { readPublicStorageFile } from '../utils/file';
import SocialMediaAccount from './SocialMediaAccount';
import Project from './Project';
import PortfolioItem from './PortfolioItem';

const USER_PROFILE_FILENAME = "UserProfile.json";

const storage = new Storage({ userSession });

class UserProfile {
    constructor(userId) {
      this.userId = userId;

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
 
    addProject = (name, imageUrl, siteUrl) => {
        this.projects.set(name, new Project(name, imageUrl, siteUrl));
        this.listeners.forEach(l => l());
    }

    removeProject = (name) => {
        this.projects.delete(name);
        this.listeners.forEach(l => l());
    }

    // PortfolioItems
    get PortfolioItems() {
        return this.portfolioItems;
    }

    addPortfolioItem = (title, description, widgetCode) => {
        this.portfolioItems.set(title, new PortfolioItem(title, description, widgetCode));
        this.listeners.forEach(l => l());
    }

    removePortfolioItem = (title) => {
        this.portfolioItems.delete(title);
        this.listeners.forEach(l => l());
    }

    load = () => {
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
                dataObject.Projects.forEach(p => this.projects.set(p.Name, new Project(p.Name, p.ImageUrl, p.SiteUrl)));
    
                this.portfolioItems.clear();
                dataObject.PortfolioItems.forEach(pi => this.portfolioItems.set(pi.Title, new PortfolioItem(pi.Title, pi.Description, pi.WidgetCode)));
    
                this.listeners.forEach(l => l());
            });    
        }
        else {
            let userId = 'michael-thompson.mixmi.app';

            // // The below code is not working at the moment due to a bug in the Stacks Storage library.
            // // For now we will work around using the readUserProfile function.
            // //
            // // const options = {
            // //     decrypt: false,
            // //     verify: false,
            // //     username: 'michael-thompson.mixmi.app',
            // //     app: "http://localhost:3000",
            // //     //zoneFileLookupURL: 'https://core.blockstack.org/v1/names/'
            // // };

            // // storage.getFile(USER_PROFILE_FILENAME, options)
            // //     .then(data => {

            // //         let dataObject = JSON.parse(data);
        
            // //         this.name = dataObject.Name;
            // //         this.descrption = dataObject.Description;
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

            readPublicStorageFile(userId, USER_PROFILE_FILENAME).then(dataObject => {
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
                dataObject.Projects.forEach(p => this.projects.set(p.Name, new Project(p.Name, p.ImageUrl, p.SiteUrl)));
    
                this.portfolioItems.clear();
                dataObject.PortfolioItems.forEach(pi => this.portfolioItems.set(pi.Title, new PortfolioItem(pi.Title, pi.Description, pi.WidgetCode)));
    
                this.listeners.forEach(l => l());
            }).catch(error => {
                alert(error);

                this.name = "Not signed in";
                this.descrption = "";
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

            // Delete me when public storage workaround is working
            // // this.name = "Not signed in";
            // // this.descrption = "";
            // // this.quote = "";
            // // this.stxId = "";
            // // this.avatarUrl = "";
            // // this.title = "";
            // // this.biography = "";

            // // this.socialMediaAccounts.clear();

            // // this.projects.clear();

            // // this.portfolioItems.clear();

            // // this.listeners.forEach(l => l());
        }        
    }

    save = () => {

        let userProfile;

        const _socialMediaAccounts = [
            { Provider : "twitter", Uid : "mike" },
            { Provider : "instagram", Uid : "mike" },
        ];
        
        const _projects = [
            { Name : "blah0", ImageUrl : "https://picsum.photos/200", SiteUrl : "https://www.google.com" },
            { Name : "blah1", ImageUrl : "https://picsum.photos/200", SiteUrl : "https://www.google.com" }
        ];
    
        const _portfolioItems = [
            { Title : "blah0", Description : "blah blah 0", WidgetCode : "<div>Test</div>" },
            { Title : "blah1", Description : "blah blah 1", WidgetCode : "<div>Test</div>" }
        ];
    
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

        const _socialMediaAccounts = [
            { Provider : "twitter", Uid : "mike" },
            { Provider : "instagram", Uid : "mike" },
        ];
        
        const _projects = [
            { Name : "blah0", ImageUrl : "https://picsum.photos/200", SiteUrl : "https://www.google.com" },
            { Name : "blah1", ImageUrl : "https://picsum.photos/200", SiteUrl : "https://www.google.com" }
        ];
    
        const _portfolioItems = [
            { Title : "blah0", Description : "blah blah 0", WidgetCode : "<div>Test</div>" },
            { Title : "blah1", Description : "blah blah 1", WidgetCode : "<div>Test</div>" }
        ];
    
        let userProfile = {
            Name : "Michael Thompson",
            Descrption : "Software Engineer",
            Quote : "YOLO",
            StxId : "XXX",
            AvatarUrl : "https://picsum.photos/200",
            Title : "Software Developer",
            Biography : "Some bio stuff...",
            IsNftCollectionButtonAvailable : true,
            IsDonateButtonAvailable: true,
            SocialMediaAccounts : _socialMediaAccounts,
            Projects : _projects,
            PortfolioItems : _portfolioItems
        }
        
        const options = {
            encrypt: false,
        };

        storage.putFile(USER_PROFILE_FILENAME, JSON.stringify(userProfile), options)
            .then(url => {
                this.load();
            });
    }

    addListener = (listener) => {
        this.listeners.push(listener);
    }
  }

  export default UserProfile;