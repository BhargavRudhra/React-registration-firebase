describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#email').type('bhargav@gmail.com')
    cy.get('#pass').type('bhargav')
  })
})