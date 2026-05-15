class navigation {
    navigation() {
        cy.fixture("example").then((data) => {
            globalThis.data = data
            cy.visit(data.registerURL)
            cy.title().should('eq', data.registerTitle)
        })
    }
}
export default navigation