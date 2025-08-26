import type { Page } from '@playwright/test';

export default class SearchDocumentationLocators {

  constructor(private page: Page) {
  }

  changeLog840SearchResultButton() {
    return this.page.locator('[href*="#/changelog?id=_840-2025-08-22"]');
  }

}
