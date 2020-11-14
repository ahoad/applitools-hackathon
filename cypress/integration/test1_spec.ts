describe('My First Test', () => {

    beforeEach(()=> {
      cy.visit("tlcHackathonMasterV1.html");
      cy.findByText("HOME").should("be.visible") 
    })
    it('main page', () => {
    })

    it('filter by color', () => {
    cy.findByText("Black").click()
    cy.findByText("Filter").click()
    cy.findByTestId("product_grid").findAllByRole("img").should("have.length", 2)
    })

    it('product details', () => {
      cy.findByText("Appli Air x Night").click()
      })
  })