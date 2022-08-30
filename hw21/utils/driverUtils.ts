import { By, Locator, until, WebDriver } from "selenium-webdriver";
import { defaultWaitingTime } from "./constants";
import { SELECTOR_TYPES } from "./types";

export class DriverUtils {
    constructor(public driver: WebDriver) { }

    async findElement(selectorType: SELECTOR_TYPES, locatorSpecific: string) {
        const locator: Locator = By[selectorType](locatorSpecific);
        await this.driver.wait(until.elementLocated(locator));
        return await this.driver.findElement(locator);
    }

    async waitForCondition(condition: () => PromiseLike<boolean>, timeout?: number) { 
        await this.driver.wait(condition, timeout ? timeout : defaultWaitingTime); 
    }
}
