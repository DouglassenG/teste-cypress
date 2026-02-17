/// <reference types="cypress" />

describe('Teste para agenda-contatos', () => {
    it('Deve adicionar um novo contato', () => {
        cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
        cy.get('input[type="text"]').type('João da Silva')
    })
})