import { expect } from "chai";
import { MobilePage } from "../support/pages/mobilePage"
import { PageFactory } from "../support/pages/pageFactory";
import { PAGES, SORT_PARAMETERS, VIEW_TYPES } from "../support/types/types";


describe("Tests for 21vek.by site - Mobile Page", () => {
    const mobilePage = PageFactory.getPage(PAGES.MOBILE) as MobilePage;

    before(() => {
        mobilePage.visitPage();
    });
    
    it("Should display items as list by default", () => {
        mobilePage.getActiveIconsViewElement().should("include.text", VIEW_TYPES.LIST);
    });

    it("Should change icons view type to the grid", () => {
        mobilePage.clickOnIconsViewElement(VIEW_TYPES.GRID);
        mobilePage.getActiveIconsViewElement().should("include.text", VIEW_TYPES.GRID);
    });

    it("Should sort items by popularity by default", () => {
        mobilePage.getSelectedSortingParameterElement().should("include.text", SORT_PARAMETERS.POPULAR);
    });

    it("Should sort items by sale parameter", () => {
        cy.intercept("GET", "?order*").as("order");
        mobilePage.clickOnSortingParameterElement(SORT_PARAMETERS.SALE);
        mobilePage.getSelectedSortingParameterElement().should("include.text", SORT_PARAMETERS.SALE);
        cy.wait("@order").then((data) => {
            expect(data.request.url).to.include("?order[sale]=asc"); 
            expect(data.response?.statusCode).to.equal(200);
        });
    });
});
