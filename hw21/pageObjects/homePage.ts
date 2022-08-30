import { Key, WebDriver } from "selenium-webdriver";
import { baseUrl } from "../utils/constants";
import { PROMO_CATEGORIES, SELECTOR_TYPES } from "../utils/types";
import { BasePage } from "./basePage";

export class HomePage extends BasePage {
    protected url: string;

    constructor(driver: WebDriver) {
        super(driver);
        this.url = baseUrl;
    }

    async visitPage() {
        await this.driver.get(this.url);
    }

    async getPromoCategoryByTitle(promoCategory: PROMO_CATEGORIES) {
        return await this.driverUtils.findElement(SELECTOR_TYPES.XPATH, `//div[@class="styles_promoList__1dG3i"]//a[text()="${promoCategory}"]`);
    }

    async clickOnPromoCategory(promoCategory: PROMO_CATEGORIES) {
        await (await this.getPromoCategoryByTitle(promoCategory)).click();
    }

    async getSearchField() {
        return await this.driverUtils.findElement(SELECTOR_TYPES.ID, "catalogSearch");
    }

    async searchByText(text: string) {
        await this.driver.actions()
            .click(await this.getSearchField())
            .sendKeys(text)
            .sendKeys(Key.RETURN)
            .perform();
    }
}
