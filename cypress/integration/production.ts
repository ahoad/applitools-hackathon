describe("My First Test", () => {
  beforeEach(() => {
    cy.visit("tlcHackathonMasterV1.html");
    cy.findByText("HOME").should("be.visible");
  });

  it("main page", () => {
    cy.eyesOpen({
      testName: "Test 1",
    });

    cy.eyesCheckWindow("main page");
  });

  it("filter by color", () => {
    cy.eyesOpen({
      testName: "Test 2",
    });

    cy.findByText("Black").click();
    cy.findByText("Filter").click();
    cy.findByTestId("product_grid")
      .findAllByRole("img")
      .should("have.length", 2);

    cy.eyesCheckWindow("filter by color");
  });

  it("product details", () => {
    cy.eyesOpen({
      testName: "Test 3",
    });

    cy.findByText("Appli Air x Night").click();
    cy.findByText("Filter").should("not.be.visible");

    cy.eyesCheckWindow("product details");
  });

  afterEach(() => {
    cy.eyesClose();
  });
});
