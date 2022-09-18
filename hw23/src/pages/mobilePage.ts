import { Page } from "@playwright/test";
import { baseUrl } from "../support/constants";
import { SORT_PARAMETERS, VIEW_TYPES } from "../support/types";
import { HomePage } from "./homePage";

export class MobilePage extends HomePage {
    constructor(page: Page) {
        super(page);
        this.url = `${baseUrl}/mobile`;
    }

    public async getActiveIconsViewText() {
        return await this.page.locator('//li[contains(@class,"cr-tools-view__active")]/a').innerText();
    }

    public async clickOnIconsViewElement(viewType: VIEW_TYPES) {
        await this.page.locator('a', { hasText: viewType}).click();
        await this.waitForElement(`//li[contains(@class,"cr-tools-view__active")]/a[text()="${viewType}"]`);
    }

    public async getSelectedSortingParameterText() {
        return await this.page.locator('//li[contains(@class, "cr-tools-sort__active")]/a//span').innerText();
    }

    public async clickOnSortingParameterElement(parameter: SORT_PARAMETERS) {
        await this.page.locator(`//li[contains(@class, "tools-sort__item")]/a//span[text()="${parameter}"]`).click();
        await this.waitForElement(`//li[contains(@class, "cr-tools-sort__active")]/a//span[text()="${parameter}"]`);
    }
}
