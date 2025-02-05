/// <reference types="cypress" />
describe('Input Page Automation', () => {
   
    beforeEach(() => {
        cy.visit("/inputs");
        cy.screenshot("input-page-before");
    });
    
    it('Reject Alphabet', () => {
        cy.screenshot("input-page-before-data");
        cy.get('input').type('Hello World!');
        cy.get('input').should('have.value', "");
        cy.screenshot("input-page-after-submit");
    });

    it("Accept Numbers", () => {
        cy.screenshot("input-page-before-data");
        cy.get('input')
            .type('1234567890')
            .should('have.value', '1234567890');
        cy.screenshot("input-page-after-submit");
    })
});