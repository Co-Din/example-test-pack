import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const baseURL = '';

const testDir = defineBddConfig({
  features: ['src/features/*.feature'],
  steps: ['./src/**/*.ts', './node_modules/example-tests-framework/dist/**/*.js']
});

export default defineConfig({
    testDir,
    timeout: 30_000, // 30 seconds test timeout as initial default as some interactions may take up to 30 seconds in tests
    retries: 2,
    reporter: [
            ['list'], // write to terminal
        ],
    use: {
        baseURL,
        actionTimeout: 2_000, // 2 seconds for each action
        navigationTimeout: 5_000, // 5 seconds for each navigation
        screenshot: 'on-first-failure',
        trace: 'off',
        video: 'off',
        /* The context option is currently commented out as the tests are generating recordings while this is on */
        /* See the following for the bug opened: https://github.com/microsoft/playwright/issues/36513 */
        // contextOptions: {
        //     recordVideo: {
        //         dir: 'playwright-report/videos/',
        //     },
        // },
        // uncomment the below if you want to test these options locally, keep commented for GoCD
        // launchOptions: {
        //     args: ['--incognito'],
        // },
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
        // {
        //     name: 'firefox',
        //     use: { ...devices['Desktop Firefox'] },
        // },
        // {
        //     name: 'webkit',
        //     use: { ...devices['Desktop Safari'] },
        // },
        // {
        //     name: 'Microsoft Edge',
        //     use: { ...devices['Desktop Edge'], channel: 'msedge' }, // or 'msedge-dev'
        // },
        // Test against mobile viewports.
        // {
        //   name: 'Mobile Chrome',
        //   use: { ...devices['Pixel 5'] },
        // },
        // {
        //   name: 'Mobile Safari',
        //   use: { ...devices['iPhone 12'] },
        // },
        // Test against branded browsers.
        // {
        //   name: 'Google Chrome',
        //   use: { ...devices['Desktop Chrome'], channel: 'chrome' }, // or 'chrome-beta'
        // },
    ],
});
