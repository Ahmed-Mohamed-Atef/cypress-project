class registration {
    userName() {
        cy.firstName().type(data.firstName)
        cy.lastName().type(data.lastName)
    }
    dob() {
        cy.dob().type(data.dob)
    }
    futureDob() {
        cy.dob().type(data.futureDob)
    }
    dobInLetters() {
        cy.dob().type(data.dofInLetters)
    }
    street() {
        cy.street().type(data.street)
    }
    city() {
        cy.city().type(data.city)
    }
    cityInNumbers() {
        cy.city().type(data.cityInNumbers)
    }
    postalCode() {
        cy.postalCode().type(data.postalCode)
    }
    postalCodeInLetters() {
        cy.postalCode().type(data.postalCodeInLetters)
    }
    houseNumber() {
        cy.houseNumber().type(data.houseNumber)
    }
    state() {
        cy.userState().type(data.state)
    }
    stateInNumbers() {
        cy.userState().type(data.stateInNumbers)
    }
    country() {
        cy.country().select(data.country).should('have.value', data.country)
    }
    phone() {
        cy.phone().type(data.phone)
    }
    phoneInLetters() {
        cy.phone().type(data.phoneInLetters)
    }
    email() {
        cy.registerEmail().type(data.NewregisterEmail)
    }
    registeredEmail() {
        cy.registerEmail().type(data.registerEmail)
    }
    randomEmail() {
        cy.registerEmail().type(`test_${Date.now()}@gmail.com`)
    }
    password() {
        cy.password().type(data.password)
    }
    weakPassword() {
        cy.password().type(data.weakPass)
    }
    noSpecialCharPass() {
        cy.password().type(data.noSpecialCharPass)
    }
    noUpperCasePass() {
        cy.password().type(data.noUpperCasePass)
    }
    submit() {
        cy.registerButton().click()
    }
}
export default registration