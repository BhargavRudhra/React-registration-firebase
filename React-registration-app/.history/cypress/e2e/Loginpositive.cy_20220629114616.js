describe("empty spec", () => {
  it("checking with correct credentials", () => {
    cy.visit("http://localhost:3000/");
    cy.get('#email').type('bhargav@gmail.com')
    cy.get('#pass').type('bhargav')
    cy.get(".button").click();
    cy.get('.accountparagraph').contains('bhargav@gmail.com')
  });
});
