/// <reference types="cypress" />

describe('Teste para agenda-contatos', () => {
    it('Deve adicionar um novo contato', () => {
        cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
        cy.get('sc-gLDzan ckeKmo input').type('João da Silva')
    })
})