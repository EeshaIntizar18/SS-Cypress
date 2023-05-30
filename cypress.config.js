const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'asjdgm',
  chromeWebSecurity:false,
  defaultCommandTimeout: 8000,


  e2e: {
   
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
    
      // implement node event listeners here
    },
  },
});
