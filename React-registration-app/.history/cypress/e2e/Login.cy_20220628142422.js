describe('empty spec', () => {
    it('checking with correct text', () => {
      cy.visit('http://localhost:3000/signup')
      cy.get('#username').type('text')
    })
    })