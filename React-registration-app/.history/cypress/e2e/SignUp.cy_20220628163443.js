describe('empty spec', () => {
  it('checking with correct text', () => {
    cy.visit('http://localhost:3001/signup')
    cy.get('#username').type('text')
    cy.get('submit').click()
  })
  })