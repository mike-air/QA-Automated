/// <reference types="cypress" />

describe('TinyMCE iFrame Handling', () => {
  it('Creates a new document and types text into the TinyMCE editor', () => {
    // 1. Visit the page and capture initial state
    cy.visit('https://the-internet.herokuapp.com/iframe');
    cy.screenshot("initial-page");

    // 2. Ensure the TinyMCE editor is loaded before interacting
    cy.get('iframe#mce_0_ifr').should('be.visible');
    cy.screenshot("iframe-visible");

    // 3. Open the "File" menu
    cy.get('.tox-menubar')
      .contains('File')
      .click();
    cy.screenshot("after-clicking-file-menu");

    // 4. Wait for and click the "New document" option
    cy.get('.tox-collection__item')
      .contains('New document')
      .should('be.visible')
      .click();
    cy.screenshot("after-clicking-new-document");

    // 5. Wait for the editor to clear after clicking "New document"
    cy.wait(1000);
    cy.screenshot("after-waiting-for-editor-clear");

    // 6. Type inside the TinyMCE editor
    cy.get('iframe#mce_0_ifr')
      .its('0.contentDocument.body')
      .should('not.be.empty')
      .then((body) => {
        cy.wrap(body).find('p')
          .clear() // Clear any preexisting text
          .screenshot("before-typing-text") // Screenshot before typing
          .type('Typing into TinyMCE!', { delay: 50 });
        cy.screenshot("after-typing-text");
      });

    // 7. Assert the text is correctly entered and capture final state
    cy.get('iframe#mce_0_ifr')
      .its('0.contentDocument.body')
      .find('p')
      .should('have.text', 'Typing into TinyMCE!')
      .screenshot("final-assertion");
  });
});
