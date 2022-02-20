class PortfolioItem {
    #title;
    #description;
    #widgetCode;
        
    constructor(title, description, widgetCode) {
      this.#title = title;
      this.#description = description;
      this.#widgetCode = widgetCode;

      this.listeners = [];
    }

    get Title() {
        return this.#title;
    }

    set Title(value) {
        if (this.#title != value)
        {
            this.#title = value;
            this.listeners.forEach(l => l());
        }
    }

    get Description() {
        return this.#description;
    }

    set Description(value) {
        if (this.#description != value)
        {
            this.#description = value;
            this.listeners.forEach(l => l());
        }
    }

    get WidgetCode() {
        return this.#widgetCode;
    }

    set WidgetCode(value) {
        if (this.#widgetCode !== value)
        {
            this.#widgetCode = value;
            this.listeners.forEach(l => l());
        }
    }

    addListener = (listener) => {
        this.listeners.push(listener);
    }
  }

  export default PortfolioItem;