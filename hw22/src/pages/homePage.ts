import { baseUrl } from "../support/constants";
import { BasePage } from "./basePage";

export class HomePage extends BasePage {
    constructor() {
        super();
        this.url = baseUrl;
    }

    async getPromoCategoryByTitle(promoCategory: string) {
        return await $(`//div[@class="styles_promoList__1dG3i"]//a[text()="${promoCategory}"]`);
    }

    async getSearchField() {
        return await $("#catalogSearch");
    }

    async isHeaderDisplayed() {
        return await (await $('//header[@id="header"]')).isDisplayed();
    }
}

export const homePage = new HomePage();
