class Project {
    #id;
    #name;
    #description;
    #imageUrl;
    #siteUrl;
    #profileId;

    constructor(id, name, description, imageUrl, siteUrl, profileId) {
      this.#id = id;
      this.#name = name;
      this.#description = description;
      this.#imageUrl = imageUrl;
      this.#siteUrl = siteUrl;
      this.#profileId = profileId;

      this.listeners = [];
    }

    get Id() {
        return this.#id;
    }

    get Name() {
        return this.#name;
    }

    set Name(value) {
        this.#name = value;
        this.listeners.forEach(l => l());
    }

    get Description() {
        return this.#description;
    }

    set Description(value) {
        this.#description = value;
        this.listeners.forEach(l => l());
    }

    get ImageUrl() {
        return this.#imageUrl;
    }

    set ImageUrl(value) {
        this.#imageUrl = value;
        this.listeners.forEach(l => l());
    }

    get SiteUrl() {
        return this.#siteUrl;
    }

    set SiteUrl(value) {
        this.#siteUrl = value;
        this.listeners.forEach(l => l());
    }

    get ProfileId() {
        return this.#profileId;
        this.listeners.forEach(l => l());
    }

    set ProfileId(value) {
        this.#profileId = value;
        this.listeners.forEach(l => l());
    }

    addListener = (listener) => {
        this.listeners.push(listener);
    }
  }

  export default Project;