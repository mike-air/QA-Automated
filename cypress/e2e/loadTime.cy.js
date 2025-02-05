describe("Page Load Performance Test", () => {
  const URL = "https://the-internet.herokuapp.com/";
  const MAX_LOAD_TIME = 3000; 

  
  beforeEach(() => {
    cy.visit(URL);
    cy.screenshot("load-time-before");
  });

  it("should load the page within 3 seconds", () => {
    cy.window().then((win) => {
      
      const [navigationEntry] = win.performance.getEntriesByType("navigation");
      
      
      if (!navigationEntry) {
        throw new Error("Navigation timing data is not available.");
      }

      // Calculate the load time (from responseStart to now)
      const loadTime = win.performance.now() - navigationEntry.responseStart;
      cy.log(`Page Load Time: ${loadTime.toFixed(2)} ms`);

      // Assert that the load time is less than the maximum allowed time
      expect(loadTime).to.be.lessThan(MAX_LOAD_TIME);
      
    });
  });
});
