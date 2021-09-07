/// <reference types="cypress" />

it('A external test...', () => {

})

describe('Should group tests...', () => {
    describe('A internal group test...', () => {
        it('Another test...', () => {

        })
    })

    it('A internal test...', () => {

    })

    it.skip('A internal test...', () => {

    })

})