describe("empty spec", () => {
  it("checking with correct text", () => {
    cy.visit("http://localhost:3000/signup");
    // cy.get('#email').type('')
    // cy.get('#pass').type('')
    cy.get(".button").click();
    cy.on("window:alert", (t) => {
      expect(t).to.contains("Firebase: Error (auth/invalid-email).");
    });
  });
});
