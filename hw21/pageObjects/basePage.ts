import { until, WebDriver } from "selenium-webdriver";
import { defaultWaitingTime } from "../utils/constants";
import { DriverUtils } from "../utils/driverUtils";

export class BasePage {
    protected driverUtils: DriverUtils;
    constructor(protected readonly driver: WebDriver) {
        this.driverUtils = new DriverUtils(driver);
    }

    async maximizeWindow() {
        await this.driver.manage().window().maximize();
    }

    async getPageUrl() {
        return await this.driver.getCurrentUrl();
    }

    async getPageTitle() {
        return await this.driver.getTitle();
    }

    async waitForPageTitle(title: string) {
        await this.driver.wait(until.titleContains(title), defaultWaitingTime);
    }

    async closeBrowser() {
        await this.driver.quit();
    }
}
