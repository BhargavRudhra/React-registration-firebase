describe('empty spec', () => {
    it('checking with wrong credentials', () => {
        cy.visit('http://localhost:3001/account')
        cy.get('.accountparagraph').contains('bhargav@gmail.com')
        cy.get('.logoutbutton').click()
    })
    })