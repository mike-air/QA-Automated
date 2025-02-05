describe("Page Load Performance Test", () => {
  const TEST_URL = "https://the-internet.herokuapp.com/";
  const MAX_LOAD_TIME = 3000; // maximum acceptable load time in milliseconds

  // Visit the URL before each test
  beforeEach(() => {
    cy.visit(TEST_URL);
    cy.screenshot("load-time-before");
  });

  it("should load the page within 3 seconds", () => {
    cy.window().then((win) => {
      // Retrieve the navigation timing entry
      const [navigationEntry] = win.performance.getEntriesByType("navigation");
      
      // If the navigation timing entry is not available, fail the test
      if (!navigationEntry) {
        throw new Error("Navigation timing data is not available.");
      }

      // Calculate the load time (from responseStart to now)
      const loadTime = win.performance.now() - navigationEntry.responseStart;
      cy.log(`Page Load Time: ${loadTime.toFixed(2)} ms`);

      // Assert that the load time is less than the maximum allowed time
      expect(loadTime).to.be.lessThan(MAX_LOAD_TIME);
      cy.screenshot("load-time-after");
    });
  });
});
