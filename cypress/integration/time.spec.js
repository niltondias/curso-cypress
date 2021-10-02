/// <reference types="cypress" />

describe('Work with alerts', () => {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

    })

    it('Testing clock', () => {
        const dt = new Date(2021, 0, 1, 15, 30)
        cy.clock(dt.getTime())
        cy.get('#buttonNow').click()
        cy.get('#resultado > span').should('contain', '01/01/2021')
    })
})