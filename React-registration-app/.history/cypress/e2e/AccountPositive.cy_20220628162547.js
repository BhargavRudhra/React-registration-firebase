describe('empty spec', () => {
    it('checking with wrong credentials', () => {
        cy.visit('http://localhost:3000/')
        cy.get('#email').type('bhargav@gmail.com')
        cy.get('#pass').type('bhargav')
        cy.get('.button').click()
        // cy.visit('http://localhost:3001/account')
        cy.get('.accountparagraph').contains('bhargav@gmail.comm')
        cy.get('.logoutbutton').click()
    })
    })