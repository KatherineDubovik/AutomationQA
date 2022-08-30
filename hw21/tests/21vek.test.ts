import { expect } from "chai";
import { Builder, Capabilities, WebDriver } from "selenium-webdriver";
import { BikesPage } from "../pageObjects/bikesPage";
import { PageFactory } from "../pageObjects/pageFactory";
import { PAGES, PROMO_CATEGORIES, SORT_PARAMETERS, VIEW_TYPES } from "../utils/types";

const driver: WebDriver = new Builder()
    .withCapabilities(Capabilities.chrome())
    .build();

const homePage = PageFactory.getPage(driver, PAGES.HOME);
const bikesPage = PageFactory.getPage(driver, PAGES.BIKES) as BikesPage;

describe("Tests for 21vek.by site", () => {
    it("Should display page title correctly", async () => {
        await homePage.visitPage();
        await homePage.maximizeWindow();
        await homePage.waitForPageTitleToBe("Онлайн-гипермаркет 21vek.by");
    });

    it("Should follow the page for a definite category", async () => {
        await homePage.clickOnPromoCategory(PROMO_CATEGORIES.BIKES);
        await bikesPage.waitForPageTitleToBe("Купить велосипед в Минске с доставкой, велики в рассрочку - 21vek.by");
        expect(await bikesPage.getCategoryHeaderText()).to.be.equal(PROMO_CATEGORIES.BIKES);
    });

    it("Should sort items by popularity by default", async () => {
        expect(await (await bikesPage.getSelectedSortingParameter()).getText()).to.be.equal(SORT_PARAMETERS.POPULAR);
    });

    it("Should sort items by selected parameter", async () => {
        await bikesPage.sortItems(SORT_PARAMETERS.SALE);
        await bikesPage.waitForSortingApplied(SORT_PARAMETERS.SALE);
    });

    it("Should display items as list by default", async () => {
        expect(await (await bikesPage.getActiveIconsView()).getText()).to.be.equal(VIEW_TYPES.LIST);
    });

    it("Should change icons view type to the grid", async () => {
        await bikesPage.changeIconsView(VIEW_TYPES.GRID);
        await bikesPage.waitForChangingIconsView(VIEW_TYPES.GRID);
    });

    after(async () => {
        await bikesPage.closeBrowser();
    });
})
