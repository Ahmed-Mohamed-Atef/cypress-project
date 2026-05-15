import login from "../support/Login-pox/Login-pox"
import navigation from "../support/Login-pox/nav"

const loginPage = new login()
const nav = new navigation()

describe("Login test", () => {
    before(function () {
        cy.fixture("example").then(function (data) {
            globalThis.data = data
        })
    })

    beforeEach(function () {
        nav.navigation()
    })

    it("1- valid input", function () {
        loginPage.email()
        loginPage.password()
        loginPage.submit()

        cy.url().should('not.include', '/auth/login')
        cy.title().should('not.include', 'Login')
    })

    it("2- invalid input (wrong password)", function () {
        loginPage.email()
        loginPage.wrongPassword()
        loginPage.submit()

        cy.url().should('include', '/auth/login')
    })

    it("3- invalid input (empty fields)", function () {
        loginPage.submit()

        cy.url().should('include', '/auth/login')
    })

    it("4- invalid input (wrong email format)", function () {
        loginPage.invalidEmailFormat()
        loginPage.password()
        loginPage.submit()

        cy.url().should('include', '/auth/login')
    })

    it("5- invalid input (email not registered)", function () {
        loginPage.wrongEmail()
        loginPage.password()
        loginPage.submit()

        cy.url().should('include', '/auth/login')
    })

    it("6- forgot password link", function () {
        loginPage.forgotPassword()

        cy.url().should('include', '/auth/forgot-password')
        cy.title().should('include', 'Forgot Password')
    })
})