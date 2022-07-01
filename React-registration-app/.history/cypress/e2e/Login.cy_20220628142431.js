describe('empty spec', () => {
    it('checking with correct text', () => {
      cy.visit('http://localhost:3000/')
      cy.get('#username').type('text')
    })
    })