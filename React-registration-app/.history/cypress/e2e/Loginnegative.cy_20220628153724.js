describe('empty spec', () => {
    it('checking with wrong credentials', () => {
        cy.visit('http://localhost:3000/')
        cy.get('#email').type('bharrgav@gmail.com')
        cy.get('#pass').type('bhargavv')
        cy.get('.button').click()
        cy.visit('http://localhost:3000/account')
        cy.get('.accountparagraph').contains('bhargav@gmail.')
        // cy.get('.logoutbutton').click()
    })
    })