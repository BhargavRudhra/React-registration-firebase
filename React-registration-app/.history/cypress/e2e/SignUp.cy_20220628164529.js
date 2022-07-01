describe('empty spec', () => {
  it('checking with correct text', () => {
    cy.visit('http://localhost:3000/signup')
    cy.get('#username').type('manikanta')
    cy.get('#email').type('manikanta@gmail.com')
    cy.get('#signuppass').type('manikanta')
    cy.get('#signuppass1').type('manikanta')
    cy.get('#signupsubmit').click()
    cy.get('.accountparagraph').contains('manikanta@gmail.com')
  })
  })