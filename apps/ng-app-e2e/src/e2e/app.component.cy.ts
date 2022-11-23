describe('ng-app', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary'));
  it('should render the component', () => {
    cy.get('nested-two-root').should('exist');
  });
});
