describe('Fundamentals test', () => {
  it('Accordion', () => {
    cy.visit('/')
    const reason1Text = /An all-in-one testing framework, assertion library, with mocking and stubbing/i
    cy.contains(reason1Text).should('not.be.visible')
    cy.getDataTest('accordion-item-1').click()
    cy.contains(reason1Text).should('be.visible')
    cy.getDataTest('accordion-item-1').click()
    cy.contains(reason1Text).should('not.be.visible')
  })
})