import { Given, Then } from "@wdio/cucumber-framework";
import { homePage } from "../pages/homePage";
import { PageFactory } from "../pages/pageFactory";
import { PAGES, TAB_TITLES } from "../support/types";

Given(/^the User opens "(.+)" page$/, async (pageName: PAGES) => {
    await PageFactory.getPage(pageName).visitPage();
});

Then(/^tab title is (.+)$/, async (tabTitle: TAB_TITLES) => {
    expect(await homePage.pageTitle).toBe(TAB_TITLES.HOME_TAB);
})
