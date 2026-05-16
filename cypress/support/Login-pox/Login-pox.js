class login {
    email() {
        cy.email().type(data.loginEmail)
    }
    invalidEmailFormat() {
        cy.email().type('notanemail')
    }
    wrongEmail() {
        cy.email().type('notregistered@gmail.com')
    }
    wrongPassword() {
        cy.password().type('wrongpassword')
    }
    password() {
        cy.password().type(data.loginPassword)
    }
    submit() {
        cy.loginButton().click()
    }
    forgotPassword() {
        cy.contains('Forgot your Password?').click()
    }
}
export default login