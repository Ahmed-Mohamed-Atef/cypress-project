class contactUs {

    userName() {
        cy.firstName().type(data.firstName)
        cy.lastName().type(data.lastName)
    }
    firstName() {
        cy.firstName().type(data.firstName)
    }
    lastname() {
        cy.lastName().type(data.lastName)
    }
    emailAdd() {
        cy.email().type(data.email)
    }
    invalidEmail(){
        cy.invalidEmail().type(data.invalidEmail)
    }
    dropDown() {
    cy.subjectDrop().select(data.subject).should('have.value', data.subject)
    }
    messageArea() {
        cy.message().type(data.message)
    }
    shortMessage() {
        cy.message1().type(data.message1)
    }
    longMessage() {
        cy.message().type(data.longMessage)
    }
    submit() {
        cy.sendButton().click()
        cy.url().should('include', '/contact')
    }
}
export default contactUs