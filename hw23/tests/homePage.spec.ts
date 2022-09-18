import { test, expect } from "@playwright/test";
import { HomePage } from "../src/pages/homePage";
import { PageFactory } from "../src/pages/pageFactory";
import { baseUrl } from "../src/support/constants";
import { EXPOSITION_ITEM_LINKS, PAGES } from "../src/support/types";

let homePage: HomePage;

test.describe("Tests for 21vek.by site - Home Page", () => {
    test.beforeEach(async ({ page }) => {
        homePage = PageFactory.getPage(page, PAGES.HOME);
        await homePage.visitPage();
    });

    test("Should display page title correctly", async () => {
        await homePage.waitForPageTitleToBe("Онлайн-гипермаркет 21vek.by");
    });

    for(const item in EXPOSITION_ITEM_LINKS) {
        const itemLink = EXPOSITION_ITEM_LINKS[item as keyof typeof EXPOSITION_ITEM_LINKS];
        test(`Should follow the page with "${baseUrl + itemLink}" url by clicking on ${itemLink} exposition item`, async () => {
            await homePage.clickOnExpositionItemLink(itemLink);
            expect(await homePage.getPageUrl()).toContain(itemLink);
        });
    }
})
