const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
  pageLoadTimeout: 40000, // 40 seconds
  e2e: {
    screenshotOnRunFailure: true,
    video: true,
    baseUrl: 'https://the-internet.herokuapp.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
