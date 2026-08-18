import { defineConfig } from "cypress";
import allureWriter from "@shelex/cypress-allure-plugin";

export default defineConfig({
  e2e: {
    baseUrl: "https://jsonplaceholder.typicode.com",
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false,
    screenshotOnRunFailure: true,
    supportFile: "cypress/support/e2e.ts",
    specPattern: "cypress/e2e/**/*.cy.ts",
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: true,
      json: true,
    },
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
  },
  env: {
    apiUrl: "https://jsonplaceholder.typicode.com",
    allure: true,
    allureLogAsserts: true,
  },
});
