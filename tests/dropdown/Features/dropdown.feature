Feature: Country dropdown validation

  Scenario: Select and verify country dropdown options
    Given I open the test automation practice page
    When I select different countries from the dropdown
    Then the dropdown should have 10 options
    And I print all dropdown values

  
