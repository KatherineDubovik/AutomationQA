import { PAGES } from "../types/types";
import { HomePage } from "./homePage";
import { MobilePage } from "./mobilePage";

export class PageFactory {
    constructor() { }

    static getPage(pageName: PAGES) {
        switch (pageName) {
            case PAGES.HOME:
                return new HomePage();
            case PAGES.MOBILE:
                return new MobilePage();
            default:
                return new HomePage();
        }
    }
}
