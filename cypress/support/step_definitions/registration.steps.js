import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import registration from "../Registration-POM/Registration-pom";
import navigation from "../Registration-POM/nav";

const register = new registration();
const nav = new navigation();

Given("I am on the Registration page", () => {
    nav.navigation()
});

When("I fill the form with valid data", () => {
    register.userName();
    register.dob();
    register.country();
    register.postalCode();
    register.houseNumber();
    register.street();
    register.city();
    register.state();
    register.phone();
    register.randomEmail();
    register.password();
});

When("I fill the form with registered email", () => {
    register.userName();
    register.dob()
    register.country();
    register.postalCode();
    register.houseNumber();
    register.street();
    register.city();
    register.state();
    register.phone();
    register.registeredEmail();
    register.password();
});

When("I fill the form with numbers in city", () => {
    register.userName();
    register.dob();
    register.country();
    register.postalCode();
    register.houseNumber();
    register.street();
    register.cityInNumbers();
    register.state();
    register.phone();
    register.randomEmail();
    register.password();
});

When("I fill the form with letters in DOB", () => {
    register.userName();
    register.dobInLetters();
    register.country();
    register.postalCode();
    register.houseNumber();
    register.street();
    register.city();
    register.state();
    register.phone();
    register.randomEmail();
    register.password();
});

When("I fill the form with numbers in state", () => {
    register.userName();
    register.dob();
    register.country();
    register.postalCode();
    register.houseNumber();
    register.street();
    register.city();
    register.stateInNumbers();
    register.phone();
    register.randomEmail();
    register.password();
});

When("I fill the form with weak password", () => {
    register.userName();
    register.dob();
    register.country();
    register.postalCode();
    register.houseNumber();
    register.street();
    register.city();
    register.state();
    register.phone();
    register.randomEmail();
    register.weakPassword();
});

When("I fill the form with future date of birth", () => {
    register.userName();
    register.futureDob();
    register.country();
    register.postalCode();
    register.houseNumber();
    register.street();
    register.city();
    register.state();
    register.phone();
    register.randomEmail();
    register.password();
});

When("I fill the form with letters in phone", () => {
    register.userName();
    register.dob();
    register.country();
    register.postalCode();
    register.houseNumber();
    register.street();
    register.city();
    register.state();
    register.phoneInLetters();
    register.randomEmail();
    register.password();
});

When("I fill the form with letters in postal code", () => {
    register.userName();
    register.dob();
    register.country();
    register.postalCodeInLetters();
    register.houseNumber();
    register.street();
    register.city();
    register.state();
    register.phone();
    register.randomEmail();
    register.password();
});

When("I fill the form with password without special character", () => {
    register.userName();
    register.dob();
    register.country();
    register.postalCode();
    register.houseNumber();
    register.street();
    register.city();
    register.state();
    register.phone();
    register.randomEmail();
    register.noSpecialCharPass();
});

When("I fill the form with password without uppercase", () => {
    register.userName();
    register.dob();
    register.country();
    register.postalCode();
    register.houseNumber();
    register.street();
    register.city();
    register.state();
    register.phone();
    register.randomEmail();
    register.noUpperCasePass();
});

When("I click the Register button", () => {
    register.submit();
});

Then("I should be redirected to login page", () => {
    cy.url({ timeout: 10000 }).should("include", "/auth/login");
    cy.title().should("eq", "Login - Practice Software Testing - Toolshop - v5.0");
});

Then("I should stay on the registration page", () => {
    cy.url().should("include", "/auth/register");
});