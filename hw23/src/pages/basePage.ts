import { Page, expect } from "@playwright/test";

export class BasePage {
    constructor(protected readonly page: Page) { }

    public async getPageTitle() {
        return await this.page.title();
    }

    public async waitForPageTitleToBe(title: string) {
        await expect(this.page).toHaveTitle(title);
    }
}
