describe('ng-app', () => {
  beforeEach(() => cy.visit('/iframe.html?id=nxwelcomecomponent--primary'));
  it('should render the component', () => {
    cy.get('nested-two-nx-welcome').should('exist');
  });
});
