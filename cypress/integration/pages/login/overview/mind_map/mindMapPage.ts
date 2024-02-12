
class MindMapPage {
  defaultMindMapText: string = 'My New Mind Map'
  backToOverviewPageLocator: string = '#DOM_CONTAINER > div > div:nth-child(1) > div > div > div > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div > div > div > div'
  searchButtonLocator: string = 'div:nth-child(2) > div:nth-child(3) > div'
  
  constructor() {
  }

  setMindMapCoreText(section: string) {
    cy.contains(this.defaultMindMapText)
      .click({ force: true })
      .click({ force: true })
      .then($element => {
        if ($element) {
          this.deleteLengthOfPredefinedText($element);
          this.writeTextInElement($element, section);
        } else {

          throw new Error('Element not found');
        }
      });
  }

  searchForCreatedMindMap(searchText: string) {
    cy.get(this.searchButtonLocator)
      .click().type(searchText).type('{enter}')
  }

  backToOverviewPage() {
    cy.get(this.backToOverviewPageLocator).click();
  }

  private writeTextInElement($element: never, section: string) {
    cy.get($element).type(section + '{enter}');
  }

  private deleteLengthOfPredefinedText($element: never) {
    const textLength = this.defaultMindMapText.length;
    Cypress._.times(textLength, () => cy.get($element).type('{backspace}'));
  }
}

export default MindMapPage;

