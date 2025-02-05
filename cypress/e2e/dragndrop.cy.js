/// <reference types="cypress" />

describe("Drag and Drop Page Automation", () => {
  beforeEach(() => {
    cy.visit("/drag_and_drop");
    cy.screenshot("drag-and-drop-page-before");
  });

  const dataTransfer = new DataTransfer();
  it("Drag and drop", () => {
    
    cy.contains("A").trigger("dragstart", { dataTransfer });
    cy.contains("B").trigger("drop", { dataTransfer });

    cy.get("#column-a").should("contain", "B");
    cy.get("#column-b").should("contain", "A");
    cy.screenshot("drag-and-drop-page-after");
  });
});
