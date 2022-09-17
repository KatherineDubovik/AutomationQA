import { test, expect } from "@playwright/test";
import { HomePage } from "../src/pages/homePage";
import { PageFactory } from "../src/pages/pageFactory";
import { EXPOSITION_ITEMS, PAGES } from "../src/support/types";

let homePage: HomePage;

test.describe("Tests for 21vek.by site - Home Page", () => {
    test.beforeEach(async ({ page }) => {
        homePage = PageFactory.getPage(page, PAGES.HOME);
        await homePage.visitPage();
    });

    test("Should display page title correctly", async () => {
        await homePage.waitForPageTitleToBe("Онлайн-гипермаркет 21vek.by");
    });

    test("Should follow the page of specific category by clicking on exposition item", async () => {
        await homePage.clickOnExpositionItem(EXPOSITION_ITEMS.BOARD_GAMES);
        await homePage.waitForPageTitleToBe("Настольные игры купить в Минске, Беларуси для всей семьи, со скидкой ");
        expect(await homePage.getCategoryHeaderText()).toBe(EXPOSITION_ITEMS.BOARD_GAMES);
    });
})
