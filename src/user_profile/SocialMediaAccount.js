class SocialMediaAccount {
    #provider;
    #uid;

    constructor(provider, uid) {
      this.#provider = provider;
      this.#uid = uid;
    }

    get Provider() {
        return this.#provider;
    }

    get Uid() {
        return this.#uid;
    }
  }

  export default SocialMediaAccount;