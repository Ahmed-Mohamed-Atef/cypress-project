Feature: Login

  Background:
    Given I am on the Login page

  Scenario: 1 - Valid login
    When I enter valid email and password
    And I click the Login button
    Then I should be redirected away from login page

  Scenario: 2 - Wrong password
    When I enter valid email and wrong password
    And I click the Login button
    Then I should stay on the login page

  Scenario: 3 - Empty fields
    When I click the Login button
    Then I should stay on the login page

  Scenario: 4 - Invalid email format
    When I enter invalid email format and password
    And I click the Login button
    Then I should stay on the login page

  Scenario: 5 - Email not registered
    When I enter unregistered email and password
    And I click the Login button
    Then I should stay on the login page

  Scenario: 6 - Forgot password link
    When I click forgot password link
    Then I should be redirected to forgot password page