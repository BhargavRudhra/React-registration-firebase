describe('empty spec', () => {
  it('checking with correct text', () => {
    cy.visit('http://localhost:3000/signup')
    cy.get('#username').type('manikanta')
    cy.get('#email').type('manikanta@gmail.com')
    cy.get('#username').type('manikanta')
    cy.get('#username').type('manikanta')
    cy.get('submit').click()
  })
  })