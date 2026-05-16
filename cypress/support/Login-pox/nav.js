class navigation {
    navigation() {
        cy.fixture("example").then((data) => {
            globalThis.data = data
            cy.visit(data.loginUrl)
            cy.title({timeout: 10000}).should('eq', data.loginTitle)
        })
    }
}
export default navigation