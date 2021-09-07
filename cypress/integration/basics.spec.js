/// <reference types="cypress" />

it('Visitar a pagina do DER e validar o título da página', () => {
    cy.visit('https://aetdigital-dev.azurewebsites.net/ViaDigitaladmin')

    cy.pause()

    cy.title()
        .should('be.equal', 'DERSA PORTAL DE SERVIÇOS - Autenticação')
        .and('contain', "DERSA")

})

it.only('Should find and iteract with an element', () => {
    cy.visit('https://wcaquino.me/cypress/componentes.html')

    cy.get('#buttonSimple')
        .click()
        .should('have.value', 'Obrigado!')

})
