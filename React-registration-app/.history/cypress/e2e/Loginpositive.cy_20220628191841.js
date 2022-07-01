describe('empty spec', () => {
    it('checking with correct text', () => {
        cy.visit('http://localhost:3000/')
        // cy.get('#email').type('')
        // cy.get('#pass').type('')
        cy.get('.button').click()
        // cy.get('#handleerror').contains('Error (auth/invalid-email).')
        cy.on('window:alert',(t)=>{
            //assertions
            expect(t).to.contains('Firebase: Error (auth/invalid-email).');
    })
    })
    })