import { Page } from "@playwright/test";
import { baseUrl } from "../support/constants";
import { logger } from "../support/logger";
import { EXPOSITION_ITEM_LINKS, PAGES } from "../support/types";
import { BasePage } from "./basePage";

export class HomePage extends BasePage {
    constructor(page: Page) {
        super(page);
        this.url = baseUrl;
    }

    public async visitPage() {
        logger.info(`Visiting page with ${this.url} url`);
        await this.page.goto(this.url);
    }

    public async clickOnExpositionItemLink(expositionItemLink: EXPOSITION_ITEM_LINKS) {
        logger.info(`Clicking on exposition item with link "${expositionItemLink}" on "${PAGES.HOME}" page`);
        await this.page.locator(`//a[@href="${expositionItemLink}"]`).click();
    }

    public async getCategoryHeaderText() {
        logger.info("Waiting for selector of category header element");
        await this.page.waitForSelector(`//h1[contains(@class,"content__header")]`);
        logger.info("Getting inner text of category header element");
        return await this.page.locator(`//h1[contains(@class,"content__header")]`).innerText();
    }
}
