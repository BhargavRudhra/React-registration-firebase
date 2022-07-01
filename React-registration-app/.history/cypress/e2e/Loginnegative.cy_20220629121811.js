describe("empty spec", () => {
  it("checking with wrong credentials", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#email").type("bharrgav@gmail.com");
    cy.get("#pass").type("bhargavv");
    cy.get(".button").click();
    cy.on("window:alert", (t) => {
      expect(t).to.contains("Firebase: Error (auth/invalid-email).");
    });
  });
});
describe("empty spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("without entering email", () => {
    cy.get("#pass").type("9876258");
    cy.get(".button").click();
    cy.on("window:alert", (text) => {
      expect(text).to.contains("please enter email");
    });
  });
  it("without entering password", () => {
    cy.get("#email").type("bhargav@gmail.com");
    cy.get(".button").click();
    cy.on("window:alert", (text) => {
      expect(text).to.contains("Please enter password");
    });
  });
  it("with incorrect email format", () => {
    cy.get("#email").type("test.com");
    cy.get("#pass").type("9876258");
    cy.get(".button").click();
    cy.on("window:alert", (text) => {
      expect(text).to.contains("Please enter proper email");
    });
  });
  it("with password less than 5 char", () => {
    cy.get("#email").type("bhargav");
    cy.get("#pass").type("9876");
    cy.get(".button").click();
    cy.on("window:alert", (text) => {
      expect(text).to.contains("Password must be of 5 characters");
    });
  });
});
