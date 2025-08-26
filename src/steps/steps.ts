import { expect } from '@playwright/test';
import { Then } from '../searchResultsFixtures.js';

Then('I see the {string} search result', async ({ searchDocumentationLocators }, name: string) => {
  switch(name) {
    case 'Playwright-bdd changelog: 8.4.0 - 2025-08-22':
      await expect(searchDocumentationLocators.changeLog840SearchResultButton()).toBeVisible();
      await expect(searchDocumentationLocators.changeLog840SearchResultButton()).toContainText('[8.4.0] - 2025-08-22');
    break;
    default:
      console.log(`The following Search page element was not found: ${name}.`);
    break;
  }
});

Then('I navigate to {string}', async ( { page } , name: string) => {
  switch(name) {
    case 'changelog 8.4.0 - 2025-08-22 result':
      await page.goto('https://vitalets.github.io/playwright-bdd/#/changelog?id=_840-2025-08-22');
    break;
    default:
      console.log(`The following Search page element was not found: ${name}.`);
    break;
  }
});
