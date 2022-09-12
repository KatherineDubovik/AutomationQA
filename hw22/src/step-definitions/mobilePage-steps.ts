import { When, Then } from '@wdio/cucumber-framework';
import { mobilePage } from '../pages/mobilePage';
import { PAGINATOR_ARROW_TYPE, SORT_PARAMETERS } from '../support/types';

Then(/^popular is sort parameter selected by default$/, async () => {
    await mobilePage.getSelectedSortingParameter() === SORT_PARAMETERS.POPULAR;
})

When(/^the User clicks on specific (.+)$/, async (sortParameter: SORT_PARAMETERS) => {
    await mobilePage.clickOnSortParameter(sortParameter);
})

Then(/^the User sees that (.+) is displayed as active$/, async (sortParameter: SORT_PARAMETERS) => {
    expect(await mobilePage.getSelectedSortingParameter()).toBe(sortParameter);
})

When(/^the User scrolls to the paginator$/, async () => {
    await mobilePage.scrollToPaginator();
});

When(/^clicks on specific page number$/, async () => {
    await mobilePage.clickOnPaginationPageNumber(5);
});

Then(/^selected page number is active$/, async () => {
    expect(await mobilePage.getActivePaginationPageNumber()).toBe(5);
});

When(/^clicks on left arrow at paginator$/, async () => {
    await mobilePage.clickOnPaginatorArrow(PAGINATOR_ARROW_TYPE.LEFT);
});

Then(/^the User switched to previous pagination page$/, async () => {
    expect(await mobilePage.getActivePaginationPageNumber()).toBe(4);
});

When(/^clicks on right arrow at paginator$/, async () => {
    await mobilePage.clickOnPaginatorArrow(PAGINATOR_ARROW_TYPE.RIGHT);
});

Then(/^the User switched to the next pagination page$/, async () => {
    expect(await mobilePage.getActivePaginationPageNumber()).toBe(6);
});

When(/^the User clicks on Up button$/, async () => {
    await mobilePage.clickOnUpButton();
});

Then(/^the User navigates to the top of the page$/, async () => {
    expect(await mobilePage.waitForHeaderIsDisplayed()).toBe(true);
});
