import { Builder, Capabilities, By, until } from "selenium-webdriver";

const driver = new Builder()
    .withCapabilities(Capabilities.chrome())
    .build();

const defaultWaitingTime = 5000;
const baseUrl = "https://www.21vek.by/";

const defaultItemQuantity = 1;
let itemsQuantity: string;


describe("Tests for OZ.by site", () => {
    test("Should display page title correctly", async () => {
        await driver.manage().window().maximize();
        await driver.get(baseUrl);
        const tabTitle = await driver.getTitle();
        expect(tabTitle).toBe("Онлайн-гипермаркет 21vek.by");
    });

    test("Should follow some category page", async () => {
        const followingPageAddress = "mobile/";
        await driver.findElement(By.linkText("Смартфоны")).click();
        const currentUrl = await driver.getCurrentUrl();
        const header = await driver.findElement(By.css(".content__header")).getText();
        expect(currentUrl).toBe(`${baseUrl}${followingPageAddress}`);
        expect(header).toStrictEqual("Смартфоны");
    });

    test("Should add item to the cart", async () => {
        await driver.wait(until.titleIs("Смартфон купить в Минске, Беларуси в рассрочку в интернет магазине"), defaultWaitingTime);
        await driver.findElement(By.xpath(`//form[@data-code="6748009_0"]/button`)).click();
        await driver.wait(until.elementLocated(By.css(`a[data-code="6748009_0"]`)), defaultWaitingTime);  // не знала, может здесь просто добавить driver.sleep?
        const changedButtonTitle = await driver.findElement(By.css(`a[data-code="6748009_0"]`)).getText();
        const cartItemsCount = await driver.findElement(By.className("headerCartCount")).getText();
        expect(changedButtonTitle).toStrictEqual("В корзине");
        expect(cartItemsCount).toStrictEqual("1");
    });

    test("Should display correct item title and quantity at the cart", async () => {
        const catalogItemTitle = await driver.findElement(By.xpath(`//a[@href="https://www.21vek.by/mobile/redmi9c4gb128gbnfc_xiaomi.html"]/span[2]`)).getText();
        await driver.findElement(By.css(".headerCartLabel")).click();
        await driver.wait(until.titleIs("Оформление заказа"), defaultWaitingTime);
        const cartItemTitle = await driver.findElement(By.css(`a[href="https://www.21vek.by/mobile/redmi9c4gb128gbnfc_xiaomi.html"]`)).getText();
        itemsQuantity = await driver.findElement(By.id("j-counter-8886977")).getAttribute('value');
        const cartCounter = await driver.findElement(By.css(".BasketTabsScreen_counter__2iMje")).getText();
        expect(cartItemTitle).toStrictEqual(catalogItemTitle);
        expect(itemsQuantity).toStrictEqual(String(defaultItemQuantity));
        expect(cartCounter).toStrictEqual("1");
    });

    test("Should increase item quantity at the cart", async () => {
        await driver.findElement(By.id("j-plus-8886977")).click();
        itemsQuantity = await driver.findElement(By.id("j-counter-8886977")).getAttribute('value');
        await driver.sleep(defaultWaitingTime);
        expect(itemsQuantity).toStrictEqual(String(defaultItemQuantity + 1));
    }); 


    test("Should delete item from the cart", async () => {
        await driver.findElement(By.linkText("удалить")).click();
        await driver.sleep(defaultWaitingTime);
        const emptyCartMessage = await driver.findElement(By.id("b-empty-basket-container")).getText();
        const basketContainer = await driver.findElement(By.css("#j-basket-container")).getAttribute("style");
        expect(emptyCartMessage).toStrictEqual("Ваша корзина пуста\n← Вернуться к покупкам");
        expect(basketContainer).toBe("display: none;");
    }); 

    afterAll(() => {
        driver.quit();
    });
});
