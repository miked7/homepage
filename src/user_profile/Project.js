class Project {
    #id;
    #name;
    #description;
    #imageUrl;
    #siteUrl;

    constructor(id, name, description, imageUrl, siteUrl) {
      this.#id = id;
      this.#name = name;
      this.#description = description;
      this.#imageUrl = imageUrl;
      this.#siteUrl = siteUrl;

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
    }

    get Description() {
        return this.#description;
    }

    set Description(value) {
        this.#description = value;
    }

    get ImageUrl() {
        return this.#imageUrl;
    }

    set ImageUrl(value) {
        this.#imageUrl = value;
    }

    get SiteUrl() {
        return this.#siteUrl;
    }

    set SiteUrl(value) {
        this.#siteUrl = value;
    }

    addListener = (listener) => {
        this.listeners.push(listener);
    }
  }

  export default Project;