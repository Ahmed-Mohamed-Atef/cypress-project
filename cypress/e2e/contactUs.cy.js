import contactUs from "../support/POM/contactUs-POM"
import navigation from "../support/POM/navigation"
const contact = new contactUs()
const nav = new navigation()

describe("Contact us", () => {
    before(function () {
        cy.fixture("example").then(function (data) {
            globalThis.data = data
        })
    })

    beforeEach(function () {
        nav.contactUsNav()
    })

    it("1- valid inputs", function () {
        contact.userName()
        contact.emailAdd()
        contact.dropDown()
        contact.messageArea()
        contact.submit()
    })

    it("2- invalid inputs (Typing all except first name)", function () {
        contact.lastname()
        contact.emailAdd()
        contact.dropDown()
        contact.messageArea()
        contact.submit()
    })

    it("3- invalid inputs (Typing all except last name)", function () {
        contact.firstName()
        contact.emailAdd()
        contact.dropDown()
        contact.messageArea()
        contact.submit()
    })

    it("4- invalid inputs (Typing all except email)", function () {
        contact.userName()
        contact.dropDown()
        contact.messageArea()
        contact.submit()
    })

    it("5- invalid inputs (Typing all except subject)", function () {
        contact.userName()
        contact.emailAdd()
        contact.messageArea()
        contact.submit()
    })

    it("6- invalid inputs (Typing all except message)", function () {
        contact.userName()
        contact.emailAdd()
        contact.dropDown()
        contact.submit()
    })

    it("7- invalid inputs (typing none)", function () {
        contact.submit()
    })

    it("8- invalid inputs (typing less than required 50 char)", function () {
        contact.userName()
        contact.emailAdd()
        contact.dropDown()
        contact.shortMessage()
        contact.submit()
    })

    it("9- invalid input (message more than 200 words)", function () {
        contact.userName()
        contact.emailAdd()
        contact.dropDown()
        contact.longMessage()
        contact.submit()
    })

    it("10- invalid input (wrong email format)", function () {
    contact.userName()
    contact.invalidEmail()
    contact.dropDown()
    contact.messageArea()
    contact.submit()
    })
})