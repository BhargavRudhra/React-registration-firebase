describe('empty spec', () => {
    it('checking with correct text', () => {
        cy.visit('http://localhost:3000/')
        cy.get('#email').type('bhargav@gmail.com')
        cy.get('#pass').type('bhargav')
        cy.get('.button').click()
        cy.get('.paragraph').should('contain','bhargav@gmail.com')
        // cy.get('.logoutbutton').click()
    })
    })