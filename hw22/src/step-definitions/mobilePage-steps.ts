import { When, Then, Before } from '@wdio/cucumber-framework';
import { mobilePage } from '../pages/mobilePage';
import { PAGINATOR_ARROW_TYPE, SORT_PARAMETERS } from '../support/types';

let expectedPageNum: number;
Before("@pagination", async () => {
    expectedPageNum = await mobilePage.getRandomPageNumber();
})

Then(/^popular is sort parameter selected by default$/, async () => {
    await mobilePage.getSelectedSortingParameter() === SORT_PARAMETERS.POPULAR;
})

When(/^the User clicks on specific (.+) sort parameter$/, async (sortParameter: SORT_PARAMETERS) => {
    await mobilePage.clickOnSortParameter(sortParameter);
})

Then(/^the User sees that (.+) sort parameter is displayed as active$/, async (sortParameter: SORT_PARAMETERS) => {
    expect(await mobilePage.getSelectedSortingParameter()).toBe(sortParameter);
})

When(/^the User scrolls to the paginator$/, async () => {
    await mobilePage.scrollToPaginator();
});

When(/^the User clicks on specific page number$/, async () => {
    await mobilePage.clickOnPaginationPageNumber(expectedPageNum);
});

Then(/^selected page number is active$/, async () => {
    expect(await mobilePage.getActivePaginationPageNumber()).toBe(expectedPageNum);
});

When(/^the User clicks on left arrow at paginator$/, async () => {
    await mobilePage.clickOnPaginatorArrow(PAGINATOR_ARROW_TYPE.LEFT);
});

Then(/^the User switched to previous pagination page$/, async () => {
    expect(await mobilePage.getActivePaginationPageNumber()).toBe(expectedPageNum - 1);
});

When(/^clicks on right arrow at paginator$/, async () => {
    await mobilePage.clickOnPaginatorArrow(PAGINATOR_ARROW_TYPE.RIGHT);
});

Then(/^the User switches to the next pagination page$/, async () => {
    expect(await mobilePage.getActivePaginationPageNumber()).toBe(expectedPageNum + 1);
});

When(/^the User clicks on Up button$/, async () => {
    await mobilePage.clickOnUpButton();
});

Then(/^the User is moved to the top of the page$/, async () => {
    expect(await mobilePage.waitForHeaderIsDisplayed()).toBe(true);
});
