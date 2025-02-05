describe('Popup Page Automation', () => {
  

  beforeEach(() => {
      cy.visit("/javascript_alerts");
      cy.screenshot("popup-page-before");   
  });
    
    it('Click to show Alert', () => {
        const alertButton = 'Click for JS Alert';
        cy.contains(alertButton).click();
        cy.screenshot("popup-page-before-alert");
        cy.on("window:alert", (str) => {
            expect(str).to.eq("I am a JS Alert");
            return true; // returning true to accept the alert
        });
        cy.screenshot("popup-page-after-alert");
        cy.get('#result').should('contain', 'You successfully clicked an alert');
    });

    it('Click to show Confirm', () => {
        const confirmButton = 'Click for JS Confirm';
        
        cy.contains(confirmButton).click();
        cy.on("window:confirm",(confirmString) => {
            expect(confirmString).to.eq("I am a JS Confirm")
            return false; // returning false to reject the confirm
        });
        cy.screenshot("popup-page-after-confirm");
        cy.contains('#result', 'You clicked: Cancel');
    })
});