import ConnectWithTasksPage from "../integration/pages/login/connectWithTasksPage";
import SelectPlanPage from "../integration/pages/login/selectPlanPage";

let selectPlanPage = new SelectPlanPage()
let connectWithTasksPage = new ConnectWithTasksPage

class HelperMethods {
  constructor() {
  }

  getHeaderText() {
    const headerTitleLocator = 'header h1';

    return cy.document().then(function(e) {
      let result = Cypress.$(e).find(headerTitleLocator);
      return result.text();
    });
  }
  
  handleHeader(headerText) {
    if (headerText !== '') {
      cy.get('header h1').should('exist').then(($header) => {
        if ($header.text().includes(selectPlanPage.headerTitleText)) {
          selectPlanPage.selectBasicPlan()
        } else if ($header.text().includes(connectWithTasksPage.headerTitleText)) {
          connectWithTasksPage.selectMaybeLaterForConnectWithTasks();
        } else {
          cy.log('Header title element not found or does not contain the specified text. Skipping Section.');
        }
      });
    }
  }
  
  skipLandingPagePlanOrTasksAdvert() {
    this.getHeaderText().then((headerText) => {
      this.handleHeader(headerText);
    });
  }
}

export default HelperMethods;
