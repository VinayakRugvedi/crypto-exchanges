describe("Exchange Details Page (/exchanges/:exchangeId)", () => {
  const binanceExchangePagePath = "/exchanges/binance";
  const numberOfSocialHandles = 3;

  it("successfully loads the page", () => {
    cy.visit(binanceExchangePagePath);
    cy.get('[data-cy="exchange-name"]').should("exist");
    cy.get('[data-cy="back-link"]').should("exist");
    cy.get('[data-cy="description-header-text"]').should("exist");
  });

  it("successfully loads social media handles of the exchange", () => {
    cy.visit(binanceExchangePagePath);
    cy.get('[data-cy="social-media-handles-holder"]').should("exist");
    cy.get('[data-cy="social-media-link"]').should(
      "have.length",
      numberOfSocialHandles,
    );
    cy.get('[data-cy="social-media-handles-holder"]')
      .find('[data-cy="social-media-link"]')
      .each((element) => {
        cy.wrap(element).should("not.have.attr", "href", "#undefined");
      });
  });
});
