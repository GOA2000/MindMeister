import { should } from "chai"

class LoginPage {

  username: string
  password: string

  loginFormElement: string = 'form'

  loginWithEmailLocator = 'a:contains("Login with your email address")'

  usernameFieldLocator: string = 'input[autocomplete="username"]'
  passwordFieldLocator: string = 'input[autocomplete="current-password"]'
  loginSubmitButtonLocator: string = 'input[type="submit"][value="Log In"]'


  usernameLoginErrorLocator = () => cy.get('div')
    .find(this.usernameFieldLocator)
    .parent()
    .find('span')

  passwordLoginErrorLocator = () => cy.get('div')
    .find(this.passwordFieldLocator)
    .parent()
    .find('span')

  constructor() {
    this.username = Cypress.env('username')
    this.password = Cypress.env('password')
  }

  enterUsername(username: string) {
    cy.get(this.usernameFieldLocator, { timeout: 10000 })
      .should('be.visible')
      .focus()
      .click()
      .type(username)
      .should('have.value', username);
  }

  enterPassword(password: string) {
    cy.get(this.passwordFieldLocator, { timeout: 10000 })
      .should('be.visible')
      .focus()
      .click()
      .type(password)
      .should('have.value', password);
  }

  clickLoginButton() {
    cy.get(this.loginSubmitButtonLocator, { timeout: 10000 })
      .should('be.visible')
      .click()
      .wait(10000);
  }

  logIn() {
    cy.title({ timeout: 10000 }).should('eq', 'Log In | Meister')
    this.enterUsername(this.username)
    this.enterPassword(this.password)
    this.clickLoginButton()
  }

  loginSequenceMissingUsername() {
    this.enterPassword(this.password)
    this.clickLoginButton()
  }

  loginSequenceMissingPassword() {
    this.enterUsername(this.username)
    this.clickLoginButton()
  }

}

export default LoginPage;