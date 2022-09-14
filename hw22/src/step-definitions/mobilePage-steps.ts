import { When, Then } from '@wdio/cucumber-framework';
import { mobilePage } from '../pages/mobilePage';
import { PAGINATOR_ARROW_TYPE, SORT_PARAMETERS } from '../support/types';

Then(/^popular is sort parameter selected by default$/, async () => {
    await mobilePage.getSelectedSortingParameterText() === SORT_PARAMETERS.POPULAR;
})

When(/^the User clicks on specific (.+) sort parameter$/, async (sortParameter: SORT_PARAMETERS) => {
    await mobilePage.clickOnSortParameter(sortParameter);
})

Then(/^the User sees that (.+) sort parameter is displayed as active$/, async (sortParameter: SORT_PARAMETERS) => {
    expect(await mobilePage.getSelectedSortingParameterText()).toBe(sortParameter);
})

When(/^the User scrolls to the paginator$/, async () => {
    await mobilePage.scrollToPaginator();
});

When(/^the User clicks on random page number$/, async function () {
    this.expectedPageNum = await mobilePage.getRandomPageNumber();
    await mobilePage.clickOnPaginationPageNumber(this.expectedPageNum);
});

Then(/^selected page number is active$/, async function () {
    expect(await mobilePage.getActivePaginationPageNumberText()).toBe(this.expectedPageNum);
});

When(/^the User clicks on (prev|next) arrow at paginator$/, async (direction: PAGINATOR_ARROW_TYPE) => {
    await mobilePage.clickOnPaginatorArrow(direction);
});

Then(/^the User is switched to the (previous|next) pagination page$/, async function (direction: "next" | "previous") {
    const delta = direction === "next" ? 1 : -1;
    expect(await mobilePage.getActivePaginationPageNumberText()).toBe(this.expectedPageNum + delta);
});

When(/^the User clicks on Up button$/, async () => {
    await mobilePage.clickOnUpButton();
});

Then(/^the User is moved to the top of the page$/, async () => {
    expect(await mobilePage.isHeaderDisplayed()).toBe(true);
});
