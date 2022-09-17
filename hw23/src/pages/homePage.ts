import { Page } from "@playwright/test";
import { baseUrl } from "../support/constants";
import { EXPOSITION_ITEMS } from "../support/types";
import { BasePage } from "./basePage";

export class HomePage extends BasePage {
    protected url: string;
    constructor(page: Page) {
        super(page);
        this.url = baseUrl;
    }

    public async visitPage() {
        await this.page.goto(this.url);
    }

    public async clickOnExpositionItem(expositionItem: EXPOSITION_ITEMS) {
        await this.page.locator(`//div[@data-gtm_name="${expositionItem}"]//a`).click();
    }

    public async getCategoryHeaderText() {
        await this.page.waitForSelector(`//h1[contains(@class,"content__header")]`);
        return await this.page.locator(`//h1[contains(@class,"content__header")]`).innerText();
    }
}
