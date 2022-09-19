import { defineConfig } from "cypress";
import { baseUrl, cypressFolder, defaultWaitingTime } from "./cypress/support/constants/constants";

export default defineConfig({
  e2e: {
    specPattern: `${cypressFolder}/e2e/**/*.cy.ts`,
    baseUrl,
    defaultCommandTimeout: defaultWaitingTime * 5,
    supportFile: `${cypressFolder}/support/index.ts`,
    videosFolder: `${cypressFolder}/assets/videos`,
    downloadsFolder: `${cypressFolder}/assets/dowloads`,
    screenshotsFolder: `${cypressFolder}/assets/screenshots`,
    fixturesFolder: `${cypressFolder}/fixtures`,
  },
});
