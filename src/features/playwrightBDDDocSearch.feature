Feature: Playwright-BDD documentation Page

  Scenario: I run a simple search in the Playwright-BDD documentation
    Given I navigate to the "Playwright-BDD documentation" page
    Then I see the Playwright-BDD search box
    When I enter the search term "changelog: 8.4.0 - 2025-08-22" in the Playwright-BDD search box
    Then I see the "Playwright-bdd changelog: 8.4.0 - 2025-08-22" search result
    Then I navigate to "changelog 8.4.0 - 2025-08-22 result"
    And I have landed at the following page with the URL "https://vitalets.github.io/playwright-bdd/#/changelog?id=_840-2025-08-22"
