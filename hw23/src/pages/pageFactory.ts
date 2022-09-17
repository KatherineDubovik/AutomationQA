import { Page } from "@playwright/test";
import { PAGES } from "../support/types";
import { HomePage } from "./homePage";
import { MobilePage } from "./mobilePage";

export class PageFactory {
    constructor() { }

    static getPage(page: Page, pageName: PAGES) {
        switch (pageName) {
            case PAGES.HOME:
                return new HomePage(page);
            case PAGES.MOBILE:
                return new MobilePage(page);
            default:
                return new HomePage(page);
        };
    }
}
