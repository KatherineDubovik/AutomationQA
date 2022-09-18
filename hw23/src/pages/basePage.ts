import { Page, expect } from "@playwright/test";

export class BasePage {
    protected url!: string;
    constructor(protected readonly page: Page) { }

    public async getPageTitle() {
        return await this.page.title();
    }

    public async waitForPageTitleToBe(title: string) {
        await expect(this.page).toHaveTitle(title);
    }

    public async waitForElement(locator: string) {
        await this.page.locator(locator).waitFor();
    }

    public async getPageUrl() {
        return this.page.url();
    }
}
