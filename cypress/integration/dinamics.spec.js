/// <reference types="cypress" />

describe('Dinamic tests', () => {
    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

    })

    const foods = ['Carne', 'Frango', 'Pizza', 'Vegetariano']

    foods.forEach(food => {
        it(`Cadastro com a comida ${food}`, () => {
            cy.get('#formNome').type('Nilton')
            cy.get('#formSobrenome').type('Dias')
            cy.get('[name=formSexo][value=M]').click()
            // cy.get('[name=formComidaFavorita][value=Carne]').click()
            cy.xpath(`//label[contains(.,'${food}')]/preceding-sibling::input`).click()
            cy.get('[name=formEscolaridade]').select('Superior')
            cy.get('#formEsportes').select('Futebol')

            cy.get('#formCadastrar').click()
            cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado')

        })
    })


})