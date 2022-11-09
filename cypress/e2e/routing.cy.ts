describe("Navigation to exchnage details from home page and vice versa", () => {
  it("successfully route to exchange details page for an exchange on home page and route back to home page", () => {
    cy.visit("/");

    cy.get('[data-cy="exchanges-holder"]')
      .find('[data-cy="exchange-component-holder"]')
      .eq(0)
      .within(() => {
        cy.get('[data-cy="exchange-internal-link"]').click();
      });
    cy.get('[data-cy="exchange-name"]').should("exist");
    cy.get('[data-cy="back-link"]').should("exist").click();

    cy.get('[data-cy="exchanges-holder"]')
      .find('[data-cy="exchange-component-holder"]')
      .eq(3)
      .within(() => {
        cy.get('[data-cy="exchange-internal-link"]').click();
      });
    cy.get('[data-cy="exchange-name"]').should("exist");
    cy.get('[data-cy="back-link"]').should("exist").click();

    cy.get('[data-cy="exchanges-holder"]')
      .find('[data-cy="exchange-component-holder"]')
      .eq(9)
      .within(() => {
        cy.get('[data-cy="exchange-internal-link"]').click();
      });
    cy.get('[data-cy="exchange-name"]').should("exist");
    cy.get('[data-cy="back-link"]').should("exist").click();
  });
});
