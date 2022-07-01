describe("empty spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/signup");
  });
  it("without entering User Name", () => {
    cy.get("#email").type("bhargav@gmail.com");
    cy.get("#signuppass").type("bhargav");
    cy.get(".button").click();
    cy.on("window:alert", (text) => {
      expect(text).to.contains("Please enter name");
    });
  });
  it("without entering email", () => {
    cy.get("#username").type("bhargav");
    cy.get("#signuppass").type("bhargav");
    cy.get(".button").click();
    cy.on("window:alert", (text) => {
      expect(text).to.contains("please enter email");
    });
  });
  it("without entering password", () => {
    cy.get("#username").type("bhargav");
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
