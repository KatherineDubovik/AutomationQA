import { baseUrl } from "../support/constants";
import { PAGINATOR_ARROW_TYPE, SORT_PARAMETERS } from "../support/types";
import { HomePage } from "./homePage";

class MobilePage extends HomePage {
    constructor() {
        super();
        this.url = `${baseUrl}/mobile/`
    }

    async getCategoryHeadertext() {
        return await (await $(`//h1[contains(@class,"content__header")]`)).getText();
    }

    async clickOnSortParameter(sortParameter: SORT_PARAMETERS) {
        await (await $(`//li[contains(@class, "tools-sort__item")]/a//span[text()="${sortParameter}"]`)).click();
        await (await $(`//li[contains(@class, "cr-tools-sort__active")]/a//span[text()="${sortParameter}"]`)).waitForDisplayed();
    }  

    async getSelectedSortingParameter() {
        return await (await $(`//li[contains(@class, "cr-tools-sort__active")]/a//span`)).getText();
    }

    async scrollToPaginator() {
        await (await $('//div[@id="j-paginator"]')).scrollIntoView();
    }

    async clickOnPaginationPageNumber(pageNumber: number) {
        await (await $(`//div[@id="j-paginator"]/a[@name="${pageNumber}"]`)).click();
        await (await $(`//div[@id="j-paginator"]/span[@name="${pageNumber}"]`)).waitForDisplayed();
    }

    async getActivePaginationPageNumber() {
        const activePaginationPageNumber = Number(await (await $('//div[@id="j-paginator"]/span[@class="cr-curent cr-paging_link"]')).getText());
        return activePaginationPageNumber;
    }

    async clickOnPaginatorArrow(arrowType: PAGINATOR_ARROW_TYPE) {
        const paginatorArrowLocator = await $(`//div[@id="j-paginator"]/a[@rel="${arrowType}"]`);
        const expectedPageNumber = await paginatorArrowLocator.getAttribute("name");
        await paginatorArrowLocator.click();
        await (await $(`//div[@id="j-paginator"]/span[@name="${expectedPageNumber}"]`)).waitForDisplayed();
    }

    async clickOnUpButton() {
        await this.scrollToPaginator();
        await (await $('//div[@id="react-helpers"]/button')).click();
    }
   
}

export const mobilePage = new MobilePage(); 
