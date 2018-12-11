Feature: Google homepage

   Scenario: I play google
    Given I navigate to google
    When I type "hello"
    And I press enter
    Then search result found
