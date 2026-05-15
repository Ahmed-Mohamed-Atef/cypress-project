import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import contactUs from "../ContactUs-Pom/contactUs-POM";
import navigation from "../ContactUs-Pom/navigation";

const contact = new contactUs();
const nav = new navigation();

Given("I am on the Contact Us page", () => {
    nav.navigation()
});

When("I fill in all fields correctly", () => {
    contact.userName();
    contact.emailAdd();
    contact.dropDown();
    contact.messageArea();
});

When("I fill in all fields except first name", () => {
    contact.lastname();
    contact.emailAdd();
    contact.dropDown();
    contact.messageArea();
});

When("I fill in all fields except last name", () => {
    contact.firstName();
    contact.emailAdd();
    contact.dropDown();
    contact.messageArea();
});

When("I fill in all fields except email", () => {
    contact.userName();
    contact.dropDown();
    contact.messageArea();
});

When("I fill in all fields except subject", () => {
    contact.userName();
    contact.emailAdd();
    contact.messageArea();
});

When("I fill in all fields except message", () => {
    contact.userName();
    contact.emailAdd();
    contact.dropDown();
});

When("I fill in all fields with short message", () => {
    contact.userName();
    contact.emailAdd();
    contact.dropDown();
    contact.shortMessage();
});

When("I fill in all fields with long message", () => {
    contact.userName();
    contact.emailAdd();
    contact.dropDown();
    contact.longMessage();
});

When("I fill in all fields with invalid email", () => {
    contact.userName();
    contact.invalidEmail();
    contact.dropDown();
    contact.messageArea();
});

When("I click the Send button", () => {
    contact.submit();
});

Then("the page should stay on contact us", () => {
    cy.url().should("include", "/contact");
    cy.title().should("include", "Contact Us");
});