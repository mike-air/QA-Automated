/// <reference types="cypress" />

describe('Login Page Automation', () => {
  const baseUrl = "/login";

  
  beforeEach(() => {
    cy.visit(baseUrl);
    cy.screenshot("login-page-before");
  });

  it('Valid Login', () => {
    
    cy.screenshot("valid-login-before-data");

    
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');

   
    cy.screenshot("valid-login-before-submit");

   
    cy.get('button').click();

   
    cy.screenshot("valid-login-after-submit");

    
    cy.get('#flash')
      .should('contain', 'You logged into a secure area!')
      .screenshot("valid-login-after-message");

    // Final screenshot to confirm end state
    cy.screenshot("valid-login-final");
  });

  it('Invalid Login', () => {
    cy.screenshot("invalid-login-before-data");

    // Enter invalid credentials
    cy.get('#username').type('wrongusername');
    cy.get('#password').type('wrongpassword');

    cy.screenshot("invalid-login-before-submit");

    // Submit the form
    cy.get('button').click();

    cy.screenshot("invalid-login-after-submit");

    // Validate that the flash message indicates an invalid login and capture a screenshot
    cy.get('#flash')
      .should('contain', 'Your username is invalid!')
      .screenshot("invalid-login-after-message");

    cy.screenshot("invalid-login-final");
  });

  it('Empty Fields', () => {
    cy.screenshot("empty-fields-before-submit");

    // Click the login button without entering any credentials
    cy.get('button').click();

    cy.screenshot("empty-fields-after-submit");

    // Validate that the flash message indicates an invalid login and capture a screenshot
    cy.get('#flash')
      .should('contain', 'Your username is invalid!')
      .screenshot("empty-fields-after-message");

    cy.screenshot("empty-fields-final");
  });
});
