import { test, expect } from '@playwright/test';
import { MobilePage } from '../src/pages/mobilePage';
import { PageFactory } from '../src/pages/pageFactory';
import { PAGES, SORT_PARAMETERS, VIEW_TYPES } from '../src/support/types';

let mobilePage: MobilePage;

test.describe("Tests for 21vek.by site - Mobile Page", () => {
  test.beforeEach(async ({ page }) => {
    mobilePage = PageFactory.getPage(page, PAGES.MOBILE) as MobilePage;
    await mobilePage.visitPage();
  });

  test("Should sort items by popularity by default", async () => {
    expect(await mobilePage.getSelectedSortingParameterText()).toBe(SORT_PARAMETERS.POPULAR)
  });

  test("Should sort items by sale parameter", async () => {
    await mobilePage.clickOnSortingParameterElement(SORT_PARAMETERS.SALE);
    expect(await mobilePage.getSelectedSortingParameterText()).toBe(SORT_PARAMETERS.SALE);
  });

  test("Should display items as list by default", async () => {
    expect(await mobilePage.getActiveIconsViewText()).toBe(VIEW_TYPES.LIST);
  });

  test("Should change icons view type to the grid", async () => {
    await mobilePage.clickOnIconsViewElement(VIEW_TYPES.GRID);
    expect(await mobilePage.getActiveIconsViewText()).toBe(VIEW_TYPES.GRID);
  });
})
