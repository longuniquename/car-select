Feature: Selecting a car by brand, model and year

  @watch
  Scenario: Selecting a car brand
    Given the user enters the page
    When the user selects a brand
    Then the available models should be shown

  @watch
  Scenario: Selecting a year
    Given the user has selected a car
    When the user selects a year
    Then the available brands should be shown

  @watch
  Scenario: Selecting a model
    Given the user has selected a brand
    And the user has selected a year
    When the user selects a model
    Then a list of cars should be displayed

  @watch
  Scenario: Changing a brand
    Given the user has a brand selected
    When the user changes the brand
    Then the year selection should be updated
    And the model selection should be cleared
