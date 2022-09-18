import { Page } from "@playwright/test";
import { baseUrl } from "../support/constants";
import { EXPOSITION_ITEM_LINKS } from "../support/types";
import { BasePage } from "./basePage";

export class HomePage extends BasePage {
    constructor(page: Page) {
        super(page);
        this.url = baseUrl;
    }

    public async visitPage() {
        await this.page.goto(this.url);
    }

    public async clickOnExpositionItemLink(expositionItemLink: EXPOSITION_ITEM_LINKS) {
        await this.page.locator(`//a[@href="${expositionItemLink}"]`).click();
    }

    public async getCategoryHeaderText() {
        await this.page.waitForSelector(`//h1[contains(@class,"content__header")]`);
        return await this.page.locator(`//h1[contains(@class,"content__header")]`).innerText();
    }
}
