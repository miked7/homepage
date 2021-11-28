class Project {
    #name;
    #imageUrl;
    #siteUrl;

    constructor(name, imageUrl, siteUrl) {
      this.#name = name;
      this.#imageUrl = imageUrl;
      this.#siteUrl = siteUrl;
    }

    get Name() {
        return this.#name;
    }

    get ImageUrl() {
        return this.#imageUrl;
    }

    get SizeUrl() {
        return this.#siteUrl;
    }
  }

  export default Project;