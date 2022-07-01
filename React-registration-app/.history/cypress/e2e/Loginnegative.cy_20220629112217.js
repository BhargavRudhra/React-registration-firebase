describe('empty spec', () => {
    it('checking with wrong credentials', () => {
        cy.visit('http://localhost:3000/')
        cy.get('#email').type('bharrgav@gmail.com')
        cy.get('#pass').type('bhargavv')
        cy.get('.button').click();
        cy.on("window:alert", (t) => {
            expect(t).to.contains("Firebase: Error (auth/invalid-email).");
          });
    })
})





describe("empty spec", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000");
    });
  
    it("without entering Nmae", () => {
      cy.get(".signinbutton").click();
      cy.on("window:alert", (text) => {
        expect(text).to.contains("Please enter name");
      });
      it("without entering email", () => {
        cy.get(".signinbutton").click();
        cy.on("window:alert", (text) => {
          expect(text).to.contains("Please enter email");
        });
        it("without entering password", () => {
            cy.get(".signinbutton").click();
            cy.on("window:alert", (text) => {
              expect(text).to.contains("Please enter password");
            });
    });
    it("with incorrect email format", () => {
      cy.get("#input-email").type("test.com");
      cy.get("#signinbutton").click();
      cy.on("window:alert", (text) => {
        expect(text).to.contains("required feilds");
      });
    });
    it("with password less than 6 char", () => {
      cy.get("#input-email").type("test");
      cy.get("#input-pass").type("123");
      cy.get("#signinbutton").click();
      cy.on("window:alert", (text) => {
        expect(text).to.contains("Password must be of 6 characters");
      });
    });
  });