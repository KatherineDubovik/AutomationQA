import { PAGES } from "../support/types";
import { homePage } from "./homePage";
import { mobilePage } from "./mobilePage";

export class PageFactory {
    constructor() { }

    static getPage(pageName: PAGES) {
        switch (pageName) {
            case PAGES.HOME:
                return homePage;
            case PAGES.MOBILE:
                return mobilePage;
            default:
                throw new Error("Page name is incorrect");
        };
    }
}
