Feature: Contact Us Form

  Background:
    Given I am on the Contact Us page

  Scenario: 1 - Valid form submission
    When I fill in all fields correctly
    And I click the Send button
    Then the page should stay on contact us

  Scenario: 2 - Missing first name
    When I fill in all fields except first name
    And I click the Send button
    Then the page should stay on contact us

  Scenario: 3 - Missing last name
    When I fill in all fields except last name
    And I click the Send button
    Then the page should stay on contact us

  Scenario: 4 - Missing email
    When I fill in all fields except email
    And I click the Send button
    Then the page should stay on contact us

  Scenario: 5 - Missing subject
    When I fill in all fields except subject
    And I click the Send button
    Then the page should stay on contact us

  Scenario: 6 - Missing message
    When I fill in all fields except message
    And I click the Send button
    Then the page should stay on contact us

  Scenario: 7 - All fields empty
    When I click the Send button
    Then the page should stay on contact us

  Scenario: 8 - Message less than 50 characters
    When I fill in all fields with short message
    And I click the Send button
    Then the page should stay on contact us

  Scenario: 9 - Message more than 200 characters
    When I fill in all fields with long message
    And I click the Send button
    Then the page should stay on contact us

  Scenario: 10 - Invalid email format
    When I fill in all fields with invalid email
    And I click the Send button
    Then the page should stay on contact us