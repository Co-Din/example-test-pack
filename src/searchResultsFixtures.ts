import { defineTestPack } from 'example-tests-framework/frameworkFixtures';
import type { FrameworkTestFixtures } from 'example-tests-framework/frameworkTypes';

import SearchDocumentationLocators from './fixtures/search_page_fixtures/searchDocumentationLocators.js'

interface SearchResultsFixtures extends FrameworkTestFixtures {
  searchDocumentationLocators: SearchDocumentationLocators;
}

const { test, bdd } = defineTestPack<SearchResultsFixtures>({
  searchDocumentationLocators: async ({ page }, use) => {
    await use(new SearchDocumentationLocators(page))
  }
});

const { Given, When, Then } = bdd;

export { test, Given, When, Then };
