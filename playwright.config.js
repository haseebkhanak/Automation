// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
// export default defineConfig({
//   testDir: './tests',
//   // timeout:100*1000,
//   // expect:{

//   //   timeout:100000
//   // },
//   /* Run tests in files in parallel */
//   fullyParallel: true,
//   /* Fail the build on CI if you accidentally left test.only in the source code. */
//   forbidOnly: !!process.env.CI,
//   /* Retry on CI only */
//   // retries: process.env.CI ? 2 : 0,
//   retries:1,
//   /* Opt out of parallel tests on CI. */
//   workers: process.env.CI ? 1 : undefined,
//   /* Reporter to use. See https://playwright.dev/docs/test-reporters */
//   reporter: 'html',
//   /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
//   use: {
//     /* Base URL to use in actions like `await page.goto('/')`. */
//     // baseURL: 'http://127.0.0.1:3000',

//     /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
//     trace: 'on-first-retry',
//     // headless: false,
//     // slowMo: 10000,
//   },

//   /* Configure projects for major browsers */
//   projects: [
//     {
//       name: 'default',
//     use: {
//       ...devices['Desktop Chrome'],
//       slowMo: 5000,
//       headless: false
//     },
//     },

//     {
//       name: 'firefox',
//       use: { ...devices['Desktop Firefox'] },
//     },

//     {
//       name: 'webkit',
//       use: { ...devices['Desktop Safari'] },
//     },
    

//     /* Test against mobile viewports. */
//     // {
//     //   name: 'Mobile Chrome',
//     //   use: { ...devices['Pixel 5'] },
//     // },
//     // {
//     //   name: 'Mobile Safari',
//     //   use: { ...devices['iPhone 12'] },
//     // },

//     /* Test against branded browsers. */
//     // {
//     //   name: 'Microsoft Edge',
//     //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
//     // },
//     // {
//     //   name: 'Google Chrome',
//     //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
//     // },
//   ],

//   /* Run your local dev server before starting the tests */
//   // webServer: {
//   //   command: 'npm run start',
//   //   url: 'http://127.0.0.1:3000',
//   //   reuseExistingServer: !process.env.CI,
//   // },
// });

export default defineConfig({
  testDir: './tests',

  // ✅ Global test timeout (per test)
  timeout: 100 * 1000, // 100 seconds per test

  // ✅ Global expect timeout
  expect: {
    timeout: 10000, // 10 seconds for expect conditions (like toBeVisible, etc.)
  },

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  use: {
    // trace: 'on-first-retry',
    // ✅ Action timeout for clicks, fills, etc.
    actionTimeout: 60000, // 60 seconds per action
    // navigationTimeout: 30000, // (optional) time for page.goto or clicks that trigger navigation
    // headless: false,
    // slowMo: 10000,
  },

  projects: [
    {
      name: 'default',
      use: {
        ...devices['Desktop Chrome'],
        slowMo: 5000,
        headless: false,
        actionTimeout: 60000 // You can add it here too (but optional since global 'use' already has it)
      },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
