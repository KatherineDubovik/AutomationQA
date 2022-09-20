Cypress.Commands.add("getElementByInnerText", (selector: string, innerText: string) => {
    return cy.get(selector).contains(innerText);
});

Cypress.Commands.add("getLinkElementByPartialLinkText", (partialLinkText: string, elementClass: string = "") => {
    return cy.get(`a${elementClass}[href*="${partialLinkText}"]`);
});
