/// <reference types="cypress" />

describe('Work with de basic elements', () => {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

    })

    beforeEach(() => {
        cy.reload()

    })

    it('using jquery selector', () => {
        cy.get(':nth-child(1) > :nth-child(3) > [type="button"]')

    })

    it.only('Using xpath', () => {
        cy.xpath('//input')

    })

})