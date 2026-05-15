import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import login from "../Login-pox/Login-pox";
import navigation from "../Login-pox/nav";

const loginPage = new login();
const nav = new navigation();

Given("I am on the Login page", () => {
    nav.navigation()
});

When("I enter valid email and password", () => {
    loginPage.email();
    loginPage.password();
});

When("I enter valid email and wrong password", () => {
    loginPage.email();
    loginPage.wrongPassword();
});

When("I enter invalid email format and password", () => {
    loginPage.invalidEmailFormat();
    loginPage.password();
});

When("I enter unregistered email and password", () => {
    loginPage.wrongEmail();
    loginPage.password();
});

When("I click the Login button", () => {
    loginPage.submit();
});

When("I click forgot password link", () => {
    loginPage.forgotPassword();
});

Then("I should be redirected away from login page", () => {
    cy.url({ timeout: 10000 }).should("not.include", "/auth/login");
});

Then("I should stay on the login page", () => {
    cy.url().should("include", "/auth/login");
});

Then("I should be redirected to forgot password page", () => {
    cy.url().should("include", "/auth/forgot-password");
});