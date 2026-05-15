import registration from "../support/Registration-POM/Registration-pom"
import navigation from "../support/Registration-POM/nav"

const register = new registration()
const nav = new navigation()

describe("Registration test", () => {
    before(function () {
        cy.fixture("example").then(function (data) {
            globalThis.data = data
        })
    })

    beforeEach(function () {
        nav.navigation()
    })

    it("1- valid registration", function () {
        register.userName()
        register.dob()
        register.country()
        register.postalCode()
        register.houseNumber()
        register.street()
        register.city()
        register.state()
        register.phone()
        register.randomEmail()
        register.password()
        register.submit()

        cy.url().should('include', '/auth/login')
        cy.title().should('eq', 'Login - Practice Software Testing - Toolshop - v5.0')
    })

    it("2- invalid registration (registered email)", function () {
        register.userName()
        register.dob()
        register.street()
        register.city()
        register.postalCode()
        register.state()
        register.country()
        register.phone()
        register.registeredEmail()
        register.password()
        register.submit()
    })

    it("3- invalid registration (numbers in city)", function () {
        register.userName()
        register.dob()
        register.street()
        register.cityInNumbers()
        register.postalCode()
        register.state()
        register.country()
        register.phone()
        register.email()
        register.password()
        register.submit()
    })

    it("4- invalid registration (DOB in letters)", function () {
        register.userName()
        register.dobInLetters()
        register.street()
        register.city()
        register.postalCode()
        register.state()
        register.country()
        register.phone()
        register.email()
        register.password()
        register.submit()
    })

    it("5- invalid registration (numbers in state)", function () {
        register.userName()
        register.dob()
        register.street()
        register.city()
        register.postalCode()
        register.stateInNumbers()
        register.country()
        register.phone()
        register.registeredEmail()
        register.password()
        register.submit()
    })

    it("6- invalid registration (weak password)", function () {
        register.userName()
        register.dob()
        register.street()
        register.city()
        register.postalCode()
        register.state()
        register.country()
        register.phone()
        register.email()
        register.weakPassword()
        register.submit()
    })

    it("7- invalid registration (empty fields)", function () {
        register.submit()
    })

    it("8- invalid registration (future date of birth)", function () {
        register.userName()
        register.futureDob()
        register.street()
        register.city()
        register.postalCode()
        register.state()
        register.country()
        register.phone()
        register.randomEmail()
        register.password()
        register.submit()
    })

    it("9- invalid registration (letters in phone number)", function () {
        register.userName()
        register.dob()
        register.street()
        register.city()
        register.postalCode()
        register.state()
        register.country()
        register.phoneInLetters()
        register.email()
        register.password()
        register.submit()
    })

    it("10- invalid registration (letters in postal code)", function () {
        register.userName()
        register.dob()
        register.street()
        register.city()
        register.postalCodeInLetters()
        register.state()
        register.country()
        register.phone()
        register.email()
        register.password()
        register.submit()
    })

    it("11- invalid registration (password without special character)", function () {
        register.userName()
        register.dob()
        register.street()
        register.city()
        register.postalCode()
        register.state()
        register.country()
        register.phone()
        register.email()
        register.noSpecialCharPass()
        register.submit()
    })

    it("12- invalid registration (password without uppercase)", function () {
        register.userName()
        register.dob()
        register.street()
        register.city()
        register.postalCode()
        register.state()
        register.country()
        register.phone()
        register.email()
        register.noUpperCasePass()
        register.submit()
    })
})