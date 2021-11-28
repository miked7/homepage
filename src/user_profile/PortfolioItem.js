class PortfolioItem {
    #title;
    #widgetCode;
        
    constructor(title, widgetCode) {
      this.#title = title;
      this.#widgetCode = widgetCode;

      this.listeners = [];
    }

    get Title() {
        return this.#title;
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