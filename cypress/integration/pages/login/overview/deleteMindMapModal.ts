class DeleteMindMapModal {
  cancelButtonText: string = 'Cancel'
  deleteItemsButtonText: string = 'Delete items'
  mindMapCardsLocator: string = 'div:nth-child(2) > div > div > div > div > div > div.knightrider-scrollview-scrollelement > div > div.kr-view > div > div > div'

  constructor() {
  }

  cancelDelete() {
    cy.contains(this.cancelButtonText)
      .should('exist')
      .click()
  }

  deleteItems() {
    cy.contains(this.deleteItemsButtonText)
      .should('exist')
      .click()
  }
}

export default DeleteMindMapModal;
