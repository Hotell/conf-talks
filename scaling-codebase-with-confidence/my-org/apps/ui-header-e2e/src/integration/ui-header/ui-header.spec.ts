describe('ui-header: UiHeader component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=uiheader--primary&knob-title='));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ui-header!');
    });
});
