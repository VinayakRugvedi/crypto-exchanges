describe("Home(/) or Exchanges(/exchanges) Page", () => {
  it("successfully loads '/' page", () => {
    cy.visit("/");
    cy.get('[data-cy="page-title-text"]').should(
      "contain",
      "Cryptocurrency Exchanges",
    );
  });

  it("successfully loads '/exchanges' page", () => {
    cy.visit("/exchanges");
    cy.get('[data-cy="page-title-text"]').should(
      "contain",
      "Cryptocurrency Exchanges",
    );
  });

  it("successfully loads '/' page with data", () => {
    cy.visit("/");
    cy.get('[data-cy="exchanges-holder"]').should("exist");
    cy.get('[data-cy="exchange-component-holder"]').should("have.length", 10);
  });

  it("successfully loads '/exchanges' page with data", () => {
    cy.visit("/exchanges");
    cy.get('[data-cy="exchanges-holder"]');
  });

  it("successfully loads each exchange on '/' page", () => {
    cy.visit("/exchanges");
    cy.get('[data-cy="exchanges-holder"]')
      .find('[data-cy="exchange-component-holder"]')
      .each((element) => {
        cy.wrap(element).get('[data-cy="exchange-name"]').should("exist");
        cy.wrap(element)
          .get('[data-cy="exchange-external-link"]')
          .should("not.have.attr", "href", "#undefined");
        cy.wrap(element)
          .get('[data-cy="exchange-internal-link"]')
          .should("not.have.attr", "href", "#undefined");
      });
  });

  it("successfully loads each exchange on '/exchanges' page", () => {
    cy.visit("/exchanges");
    cy.get('[data-cy="exchanges-holder"]')
      .find('[data-cy="exchange-component-holder"]')
      .each((element) => {
        cy.wrap(element).get('[data-cy="exchange-name"]').should("exist");
        cy.wrap(element)
          .get('[data-cy="exchange-external-link"]')
          .should("not.have.attr", "href", "#undefined");
        cy.wrap(element)
          .get('[data-cy="exchange-internal-link"]')
          .should("not.have.attr", "href", "#undefined");
      });
  });
});
