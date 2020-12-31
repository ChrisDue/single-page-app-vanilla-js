export default class {
    constructor(params) {
        this.params = params;
        console.log(this.params);
    }

    // Title in Browser Tab
    setTitle(title) {
        document.title = title;
    }

    async getHtml() {
        return "";
    }
}