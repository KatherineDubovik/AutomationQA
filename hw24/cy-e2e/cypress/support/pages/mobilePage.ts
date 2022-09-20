import { SORT_PARAMETERS, VIEW_TYPES } from "../types/types";
import { HomePage } from "./homePage";

export class MobilePage extends HomePage {
    constructor() {
        super();
        this.url = "/mobile/";
    }

    public getActiveIconsViewElement() {
        return cy.get("li.cr-tools-view__active a");
    }

    public clickOnIconsViewElement(iconsViewType: VIEW_TYPES) {
        cy.getElementByInnerText("a.tools-view__link", iconsViewType).click();
    }

    public getSelectedSortingParameterElement() {
        return cy.get("li.cr-tools-sort__active a");
    }

    public clickOnSortingParameterElement(parameter: SORT_PARAMETERS) {
        cy.getElementByInnerText("a.tools-sort__link", parameter).click();
    }
}
