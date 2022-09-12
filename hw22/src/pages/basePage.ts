export class BasePage {
    protected url!: string;
    async visitPage() {
        await browser.url(this.url);
    }

    get pageTitle() {
        return browser.getTitle();
    }

    get currentUrl() {
        return browser.getUrl()
    }
}
