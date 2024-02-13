import DeleteMindMapModal from "./deleteMindMapModal";

class MyMapsOverviewPage {

  createNewMindMap: string = `[style="width: 144px; height: 113px; align-items: center; justify-content: center;"]`
  newMindMap: string = 'New mind map'
  mindMapCardsLocator: string = 'div:nth-child(2) > div > div > div > div > div > div.knightrider-scrollview-scrollelement > div > div.kr-view > div > div > div'
  closeSearchButtonLocator: string = '[style="cursor: pointer; color: rgb(138, 148, 153); width: 18px; height: 18px;"] > svg'

  constructor() {
  }

  openGetStartedWizzard() {
    cy.get(this.createNewMindMap, { timeout: 10000 })
      .should('be.visible')
      .click();

    cy.contains(this.newMindMap)
      .click();
  }

  validateExpectedNumberOfMindMapCardsOnOverviewPage(expectedNumber) {
    if (expectedNumber > 0) {
      cy.get(this.mindMapCardsLocator,{timeout:10000}).its('length').should('eq', expectedNumber + 1);
    } else {
      cy.get(this.mindMapCardsLocator,{timeout:10000}).should('not.exist')
    }
  }

  validateExpectedNumberOfMindMapCardsOnOverviewPageAfterSearch(expectedNumber) {
    if (expectedNumber > 0) {
      cy.get(this.mindMapCardsLocator,{timeout:10000}).its('length').should('eq', expectedNumber);
    } else {
      cy.get(this.mindMapCardsLocator,{timeout:10000}).should('not.exist')
    }
  }

  deleteMindMapOnOverviewPage() {
    let deleteModal = new DeleteMindMapModal()

    cy.get(this.mindMapCardsLocator)
      .should('exist')
      .then(() => {
        this.openMindMapCardMenuForCardPosition(1)
        this.selectDeleteFromMenu()
        deleteModal.deleteItems()
        cy.log('Element exists');
      }).wait(3000);
  }

  closeSearchfield() {
    cy.get(this.closeSearchButtonLocator)
      .should('be.visible')
      .click()
  }

  selectDeleteFromMenu() {
    cy.contains('Move to trash').should('exist').click()
  }

  selectDuplicateFromMenu() {
    cy.contains('Duplicate').should('exist').click()
  }

  openMindMapCardMenuForCardPosition(cardNo) {
    cy.get(this.mindMapCardsLocator)
      .eq(cardNo - 1)
      .trigger('mouseover')
      .find('div:nth-child(2) > div:nth-child(2) > div > div > div > div')
      .eq(3)
      .click();
  }

  validateMindMapContainsText(cardNo, mindMapTitle: string) {
    cy.get(this.mindMapCardsLocator)
      .eq(cardNo - 1)
      .should('contain', mindMapTitle)
  }

  duplicateMindMapOnPosition(cardNo) {
    this.openMindMapCardMenuForCardPosition(cardNo)
    this.selectDuplicateFromMenu();
  }
}

export default MyMapsOverviewPage;

