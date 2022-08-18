const baseUrl = 'http://localhost:3000/';

describe('renders the landing page', () => {
  it('renders correctly', () => {
    cy.visit(baseUrl);
  });
  it('renders add new record button', () => {
    cy.get('.add-new-record-button').should('be.visible');
  });
  it('renders search bar', () => {
    cy.get('.search-bar-input');
    cy.get('.search-bar-btn');
  });

  it('renders bottom slider', () => {
    cy.get('.bottom-slide-container');
  });

  it('renders bottom information', () => {
    cy.get('.bottom-information');
    cy.get('.map');
    cy.get('.bottom-image');
    cy.get('.info');
  });
});

describe('enters input', () => {
  it('enters input', () => {
    cy.get('.search-bar-input').type('bri');
  });
  it('should render search bar results', () => {
    cy.get('.search-bar-results').should('be.visible');
    cy.wait(4000);
  });
  it('should click search button', () => {
    cy.get('.search-bar-btn').click();
  });
});

describe('should render list page and click add new record button ', () => {
  it('should render search bar input', () => {
    cy.get('.search-bar-input').should('be.visible');
  });
  it('should render search bar button', () => {
    cy.get('.search-bar-btn').should('be.visible');
  });
  it('should render search bar results', () => {
    cy.get('.search-bar-results').should('be.visible');
  });
  it('should render sorting selection', () => {
    cy.get('.sort-select').should('be.visible');
  });
  it('should render pagination bar', () => {
    cy.get('.pagination-bar').should('be.visible');
  });
  it('should render list of records', () => {
    cy.get('.add-new-record-button').should('be.visible');
    cy.wait(4000);
  });

  it('should click add new record button', () => {
    cy.get('.add-new-record-button').click();
  });
});

describe('should render add new record page', () => {
  it('should render form area', () => {
    cy.get('form').should('be.visible');
  });
  it('should render add button', () => {
    cy.get('.add-button').should('be.visible');
  });
  it('should fill the form with unvalid information and click the add button', () => {
    cy.get('#\\31 ').type('test');
    cy.get('#\\32 ').type('test');
    cy.get('#\\33 ').type('test');
    cy.get('#\\34 ').type('test');
    cy.get('.add-button').click();
  });
  it('should throw error message', () => {
    cy.get(':nth-child(1) > .error-message-red').should('be.visible');
    cy.get('.error-message-text').should('be.visible');
    cy.wait(4000);
  });
  it('should fill the form with valid information and click the add button', () => {
    cy.get('#\\31 ').clear().type('Jack Bauer');
    cy.get('#\\32 ').clear().type('United Kingdom');
    cy.get('#\\33 ').clear().type('London');
    cy.get('#\\34 ').clear().type('jackb@gmail.com');
    cy.get('.add-button').click();
  });
});
