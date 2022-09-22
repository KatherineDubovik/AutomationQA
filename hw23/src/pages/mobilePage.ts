import { Page } from "@playwright/test";
import { baseUrl } from "../support/constants";
import { logger } from "../support/logger";
import { SORT_PARAMETERS, VIEW_TYPES, PAGES } from "../support/types";
import { HomePage } from "./homePage";

export class MobilePage extends HomePage {
    constructor(page: Page) {
        super(page);
        this.url = `${baseUrl}/mobile`;
    }

    public async getActiveIconsViewText() {
        logger.info(`Getting inner text of active icons view element on "${PAGES.MOBILE}" page`);
        return await this.page.locator('//li[contains(@class,"cr-tools-view__active")]/a').innerText();
    }

    public async clickOnIconsViewElement(viewType: VIEW_TYPES) {
        logger.info(`Clicking on "${viewType}" icons view element on "${PAGES.MOBILE}" page`);
        await this.page.locator('a', { hasText: viewType}).click();
        logger.info(`Waiting for "${viewType}" icons view element to be active on "${PAGES.MOBILE}" page`);
        await this.waitForElement(`//li[contains(@class,"cr-tools-view__active")]/a[text()="${viewType}"]`);
    }

    public async getSelectedSortingParameterText() {
        logger.info(`Getting inner text of selected sorting parameter element on "${PAGES.MOBILE}" page`);
        return await this.page.locator('//li[contains(@class, "cr-tools-sort__active")]/a//span').innerText();
    }

    public async clickOnSortingParameterElement(parameter: SORT_PARAMETERS) {
        logger.info(`Clicking on "${parameter}" sorting parameter element on "${PAGES.MOBILE}" page`);
        await this.page.locator(`//li[contains(@class, "tools-sort__item")]/a//span[text()="${parameter}"]`).click();
        logger.info(`Waiting for "${parameter}" sorting parameter to be active on "${PAGES.MOBILE}" page`);
        await this.waitForElement(`//li[contains(@class, "cr-tools-sort__active")]/a//span[text()="${parameter}"]`);
    }
}
