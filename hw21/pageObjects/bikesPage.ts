import { WebDriver } from "selenium-webdriver";
import { baseUrl } from "../utils/constants";
import { SELECTOR_TYPES, SORT_PARAMETERS, VIEW_TYPES } from "../utils/types";
import { HomePage } from "./homePage";

export class BikesPage extends HomePage {
    protected url: string;
    constructor(driver: WebDriver) {
        super(driver);
        this.url = `${baseUrl}bikes`
    }

    async getCategoryHeaderText() {  
        return await (await this.driverUtils.findElement(SELECTOR_TYPES.XPATH, `//h1[contains(@class,"content__header")]`)).getText();
    }

    async getActiveIconsView() {
        return await this.driverUtils.findElement(SELECTOR_TYPES.XPATH, '//li[contains(@class,"cr-tools-view__active")]/a');
    }

    async changeIconsView(viewType: VIEW_TYPES) {
        await (await this.driverUtils.findElement(SELECTOR_TYPES.LINK_TEXT, viewType)).click();
    }

    async waitForChangingIconsView(newViewType: VIEW_TYPES) {
        await this.driverUtils.waitForCondition(async () => {
            return await (await this.getActiveIconsView()).getText() === newViewType;
        });
    }

    async getSelectedSortingParameter() {
        return await this.driverUtils.findElement(SELECTOR_TYPES.XPATH, '//li[contains(@class, "cr-tools-sort__active")]/a//span');
    }

    async sortItems(parameter: SORT_PARAMETERS) {
        await (await this.driverUtils.findElement(SELECTOR_TYPES.XPATH, `//li[contains(@class, "tools-sort__item")]/a//span[text()="${parameter}"]`)).click();
    }

    async waitForSortingApplied(parameter: SORT_PARAMETERS) {
        await this.driverUtils.waitForCondition(async () => {
            return await (await this.getSelectedSortingParameter()).getText() === parameter;
        });
    }
}
