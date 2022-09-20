/// <reference types="cypress" />

import './commands'

declare global {
    namespace Cypress {
      interface Chainable {
        getElementByInnerText(selector: string, innerText: string): Cypress.Chainable<JQuery<HTMLElement>>
        getLinkElementByPartialLinkText(partialLinkText: string, elementClass: string): Cypress.Chainable<JQuery<HTMLElement>>
      }
    }
  }

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
