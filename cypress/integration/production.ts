describe("AppliFashion should be displayed correctly", () => {
  beforeEach(() => {
    cy.visit("tlcHackathonDev.html");
    cy.findByText("HOME").should("be.visible");
  });

  it("Main Page", () => {
    cy.eyesOpen({
      testName: "Test 1",
    });

    cy.eyesCheckWindow({
      tag: "main page",
      target: "window",
    });
  });

  it("Filtered Product Grid", () => {
    cy.eyesOpen({
      testName: "Test 2",
    });

    cy.findByText("Black").click();
    cy.findByText("Filter").click();
    cy.findByTestId("product_grid").should("be.visible");

    cy.eyesCheckWindow({
      tag: "filter by color",
      target: "region",
      selector: "#product_grid",
    });
  });

  it("Product Details", () => {
    cy.eyesOpen({
      testName: "Test 3",
    });

    cy.findByText("Appli Air x Night").click();
    cy.findByText("Filter").should("not.be.visible");

    cy.eyesCheckWindow({
      tag: "product details",
      target: "window",
    });
  });

  afterEach(() => {
    cy.eyesClose();
  });
});
