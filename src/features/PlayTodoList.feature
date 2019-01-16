Feature: TodoList

   Scenario: I play google
    Given I navigate to Todo list site
    When I enter task "ABC"
    And I enter task "DEF"
    And I enter task "GHI"
    Then I see all active tasks 
