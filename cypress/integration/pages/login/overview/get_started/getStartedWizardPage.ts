
class GetStartedWizardPage {
  sectionsTitle: string = 'Get Started'
  
  constructor() {
  }

  selectSection(section: string){
  cy.contains(this.sectionsTitle)
  .parent('div')
  .children('div')
  .contains(section)
  .click({force:true})
  }

  selectIcon(icon: string,section: string){
    cy.contains('.kr-text', section)
    .parents('.kr-view')
    .find('.kr-text')
    .contains(icon) 
    .should('be.visible') 
    .click()
    .wait(5000); 
  }

  selectIconWithinSection(icon:string, section: string){
    this.selectSection(section)
    this.selectIcon(icon,section)
  }
}

export default GetStartedWizardPage;

