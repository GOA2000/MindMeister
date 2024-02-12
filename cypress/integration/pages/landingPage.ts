class LandingPage {
  baseUrl: string = 'https://www.mindmeister.com/';
  signInLink: string = 'a:contains("Log In")';

  constructor() {
  }

  visitBaseUrl() {
    return cy.visit(this.baseUrl);
  }

  clickSignInLink() {
    return cy.get(this.signInLink).should('exist').click();
  }
}

export default LandingPage;