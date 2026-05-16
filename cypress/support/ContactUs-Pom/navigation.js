class navigation {
    navigation() {
        cy.fixture("example").then((data) => {
            globalThis.data = data
            cy.visit(data.contactusURL)
            cy.title({timeout: 10000}).should('eq', data.contactTitle)
        })
    }
}
export default navigation