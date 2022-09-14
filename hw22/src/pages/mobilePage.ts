import { baseUrl } from "../support/constants";
import { PAGINATOR_ARROW_TYPE, SORT_PARAMETERS } from "../support/types";
import { HomePage } from "./homePage";

class MobilePage extends HomePage {
    constructor() {
        super();
        this.url = `${baseUrl}/mobile/`;
    }

    public async getCategoryHeaderText() {
        return await (await $(`//h1[contains(@class,"content__header")]`)).getText();
    }

    public async clickOnSortParameter(sortParameter: SORT_PARAMETERS) {
        await (await $(`//li[contains(@class, "tools-sort__item")]/a//span[text()="${sortParameter}"]`)).click();
        await (await $(`//li[contains(@class, "cr-tools-sort__active")]/a//span[text()="${sortParameter}"]`)).waitForDisplayed();
    }  

    public async getSelectedSortingParameterText() {
        return await (await $(`//li[contains(@class, "cr-tools-sort__active")]/a//span`)).getText();
    }

    public async scrollToPaginator() {
        await (await $('//div[@id="j-paginator"]')).scrollIntoView();
    }

    public async clickOnPaginationPageNumber(expectedPageNumber: number) {
        let isPageNumberDisplayed;
            do {
                await this.clickOnPaginatorArrow(PAGINATOR_ARROW_TYPE.RIGHT);
                isPageNumberDisplayed = await this.isPageNumberVisible(expectedPageNumber);
            } while (!isPageNumberDisplayed);
        await (await $(`//div[@id="j-paginator"]/a[@name="${expectedPageNumber}"]`)).click();
        await (await $(`//div[@id="j-paginator"]/span[@name="${expectedPageNumber}"]`)).waitForDisplayed(); 
    }

    public async isPageNumberVisible(pageNumber: number) {
        return await (await $(`//div[@id="j-paginator"]/a[@name="${pageNumber}"]`)).isDisplayed();
    }

    public async getActivePaginationPageNumberText() {
        return Number(await (await $('//div[@id="j-paginator"]/span[@class="cr-curent cr-paging_link"]')).getText());
    }

    public async clickOnPaginatorArrow(arrowType: PAGINATOR_ARROW_TYPE) {
        const paginatorArrowLocator = await $(`//div[@id="j-paginator"]/a[@rel="${arrowType}"]`);
        const expectedPageNumber = await paginatorArrowLocator.getAttribute("name");
        await paginatorArrowLocator.click();
        await (await $(`//div[@id="j-paginator"]/span[@name="${expectedPageNumber}"]`)).waitForDisplayed();
    }

    public async clickOnUpButton() {
        await this.scrollToPaginator();
        await (await $('//div[@id="react-helpers"]/button')).click();
    }
   
    public async getRandomPageNumber() {
        await this.scrollToPaginator();
        const pagesQuantity = Number(await (await $(`//div[@id="j-paginator"]//a[last()-1]`)).getText());
        return Math.floor(Math.random() * (pagesQuantity - 2)) + 2;
    }
}

export const mobilePage = new MobilePage(); 
