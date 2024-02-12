class ConnectWithTasksPage {
  headerTitleLocator: string = 'header'
  headerTitleText: string = 'Go beyond mind mapping'
  maybeLaterLinkLocator: string = ('a:contains("Maybe")')

  baseUrl = 'https://accounts.meister.co/payments/mm/pricing'

  constructor() {
  }

  visitBaseUrl() {
    return cy.visit(this.baseUrl);
  }

  selectMaybeLaterForConnectWithTasks() {
    cy.get(this.maybeLaterLinkLocator).click().wait(5000)
  }
}

export default ConnectWithTasksPage;

