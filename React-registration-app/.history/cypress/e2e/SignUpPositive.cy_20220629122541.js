describe("empty spec", () => {
  it("checking with correct text", () => {
    cy.visit("http://localhost:3000/signup");
    cy.get("#username").type("maharshi");
    cy.get("#email").type("maharshi@gmail.com");
    cy.get("#signuppass").type("maharshi");
    cy.get("#signuppass1").type("maharshi");
    cy.get("#signupsubmit").click();
    cy.get(".accountparagraph").contains("maharshi@gmail.com");
  });
});
