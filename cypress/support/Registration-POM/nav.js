class navigation {
    navigation() {
        cy.fixture("example").then((data) => {
            globalThis.data = data
            cy.visit(data.registerURL)
            cy.title({timeout: 10000}).should('eq', data.registerTitle)
        })
    }
}
export default navigation