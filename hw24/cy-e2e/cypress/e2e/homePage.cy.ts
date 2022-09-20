import { baseUrl } from "../support/constants/constants";
import { PageFactory } from "../support/pages/pageFactory";
import { EXPOSITION_ITEM_LINKS, PAGES } from "../support/types/types";

describe("Tests for 21vek.by site - Home Page", () => {
    const homePage = PageFactory.getPage(PAGES.HOME);

    beforeEach(() => {
        homePage.visitPage();
    });

    it("Should display page title correctly", () => {
        homePage.waitForPageTitleToIncludeText("Онлайн-гипермаркет 21vek.by");
    });

    for(const item in EXPOSITION_ITEM_LINKS) {
        const itemLink = EXPOSITION_ITEM_LINKS[item as keyof typeof EXPOSITION_ITEM_LINKS];
        it(`Should follow the page with "${baseUrl + itemLink}" url by clicking on ${itemLink} exposition item`, () => {
            homePage.clickOnExpositionItemLink(itemLink);
            homePage.getPageUrl().should("include", itemLink);
        });
    };
});
