import { WebDriver } from "selenium-webdriver";
import { PAGES } from "../utils/types";
import { BikesPage } from "./bikesPage";
import { HomePage } from "./homePage";

export class PageFactory {
    constructor() { }

    static getPage(driver: WebDriver, pageName: PAGES) {
        switch (pageName) {
            case PAGES.HOME:
                return new HomePage(driver);
            case PAGES.BIKES:
                return new BikesPage(driver);
            default:
                return new HomePage(driver);
        };
    }
}
