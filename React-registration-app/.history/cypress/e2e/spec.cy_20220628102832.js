describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#email').type('bhar\av@gmail.com')
    cy.get('#pass').type('bhargav')
    cy.get('.button').click()
    cy.get('.paragraph')
    cy.get('.logoutbutton').click()
    // cy.visit('http://localhost:3000/')
    // cy.get('#logsignup').type('SignUp')
  })
})