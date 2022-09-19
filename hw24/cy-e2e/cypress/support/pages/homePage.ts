import { EXPOSITION_ITEM_LINKS } from "../types/types";
import { BasePage } from "./basePage";

export class HomePage extends BasePage {
    constructor() {
        super();
        this.url = "/";
    }

    public clickOnExpositionItemLink(expositionItemLink: EXPOSITION_ITEM_LINKS) {
        cy.get(`a.poster__link[href="${expositionItemLink}"]`).click();
    }
}
