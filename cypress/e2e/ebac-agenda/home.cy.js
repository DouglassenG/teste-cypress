/// <reference types="cypress" />

describe('Teste para agenda-contatos', () => {
    beforeEach(() => {
        cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
    })

    it('Deve adicionar um novo contato', () => {        
        cy.get('input[type="text"]').type('João da Silva')
        cy.get('input[type="email"]').type('joao@exemplo.com')
        cy.get('input[type="tel"]').type('11987654321')
        cy.get('button[type="submit"]').click()
    })
    it('Deve editar um contato existente', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .edit').click()
        cy.get('input[type="text"]').clear().type('Maria Silva')
        cy.get('.alterar').click()
    })
    it('Deve excluir um contato', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .delete').click()
    })
})