Feature: Registration

  Background:
    Given I am on the Registration page

  Scenario: 1 - Valid registration
    When I fill the form with valid data
    And I click the Register button
    Then I should be redirected to login page

  Scenario: 2 - Already registered email
    When I fill the form with registered email
    And I click the Register button
    Then I should stay on the registration page

  Scenario: 3 - Numbers in city
    When I fill the form with numbers in city
    And I click the Register button
    Then I should stay on the registration page

  Scenario: 4 - DOB in letters
    When I fill the form with letters in DOB
    And I click the Register button
    Then I should stay on the registration page

  Scenario: 5 - Numbers in state
    When I fill the form with numbers in state
    And I click the Register button
    Then I should stay on the registration page

  Scenario: 6 - Weak password
    When I fill the form with weak password
    And I click the Register button
    Then I should stay on the registration page

  Scenario: 7 - Empty fields
    When I click the Register button
    Then I should stay on the registration page

  Scenario: 8 - Future date of birth
    When I fill the form with future date of birth
    And I click the Register button
    Then I should stay on the registration page

  Scenario: 9 - Letters in phone number
    When I fill the form with letters in phone
    And I click the Register button
    Then I should stay on the registration page

  Scenario: 10 - Letters in postal code
    When I fill the form with letters in postal code
    And I click the Register button
    Then I should stay on the registration page

  Scenario: 11 - Password without special character
    When I fill the form with password without special character
    And I click the Register button
    Then I should stay on the registration page

  Scenario: 12 - Password without uppercase
    When I fill the form with password without uppercase
    And I click the Register button
    Then I should stay on the registration page