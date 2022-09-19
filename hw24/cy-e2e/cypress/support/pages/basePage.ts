export class BasePage {
    public url!: string;

    constructor() { }

    public getPageTitle() {
        return cy.title();
    }

    public waitForPageTitleToIncludeText(pageTitleText: string) {
        this.getPageTitle().should("include", pageTitleText);
    }

    public getPageUrl() {
        return cy.url();
    }

    public visitPage() {
        cy.visit(this.url);
    }
}
