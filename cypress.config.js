const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  defaultCommandTimeout: 8000,
  env:
   {
    url : "https://rahulshettyacademy.com"
   },
  projectId: '6mtabm',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    video : true,
    //videoFolder : 'cypress/reports/html/video',
    screenshotsFolder : 'cypress/reports/html/screenshots',
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
    specPattern : 'cypress/integration/examples/*.js'
  },
});
