import { Page, expect } from "@playwright/test";
import { logger } from "../support/logger";

export class BasePage {
    protected url!: string;
    constructor(protected readonly page: Page) { }

    public async getPageTitle() {
        logger.info("Getting page title");
        return await this.page.title();
    }

    public async waitForPageTitleToBe(title: string) {
        logger.info(`Waiting for page title to be "${title}"`);
        await expect(this.page).toHaveTitle(title);
    }

    public async waitForElement(locator: string) {
        logger.info(`Waiting for element with "${locator}" locator"`);
        await this.page.locator(locator).waitFor();
    }

    public async getPageUrl() {
        logger.info("Getting page url");
        return this.page.url();
    }
}
