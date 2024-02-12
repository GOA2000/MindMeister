class SelectPlanPage {
  headerTitleLocator: string = 'header'
  headerTitleText: string = 'Choose Your MindMeister Plan.'

  baseUrl = 'https://accounts.meister.co/payments/mm/pricing'

  constructor() {
  }

  visitBaseUrl() {
    return cy.visit(this.baseUrl);
  }

  selectButtonForPlanWithTitle(planTitle: string) {
    return cy.get(`.plan-card__title:contains(${planTitle})`)
      .parent('div')
      .parent('div')
      .find('button');
  }

  selectBasicPlan() {
    this.selectButtonForPlanWithTitle('Basic').click({ force: true }).wait(10000);
  }
}

export default SelectPlanPage;
