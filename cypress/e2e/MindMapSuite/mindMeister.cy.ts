/// <reference types="cypress" />

import HelperMethods from "../../helpers/helperMethods";
import GetStartedWizardPage from "../../integration/pages/login/overview/get_started/getStartedWizardPage";
import LandingPage from "../../integration/pages/landingPage";
import LoginPage from "../../integration/pages/login/loginPage";

import MindMapPage from "../../integration/pages/login/overview/mind_map/mindMapPage";
import MyMapsOverviewPage from "../../integration/pages/login/overview/myMapsOverviewPage";

const landingPage = new LandingPage
const loginPage = new LoginPage
const myMapsOverviewPage = new MyMapsOverviewPage
const getStartedWizardPage = new GetStartedWizardPage
const mindMapPage = new MindMapPage
const helperMethods = new HelperMethods

describe('MindMeister Application Tests', () => {
  let skipAfterEach =false

  // Cypress.on('uncaught:exception', (err, runnable) => {
  //   console.error('Uncaught exception occurred:', err.message);
  //   return false;
  // });

  beforeEach(()=>{
    cy.visit(landingPage.baseUrl)
    landingPage.clickSignInLink()
    cy.title().should('eq', 'Log In | Meister')
    loginPage.loginSequence()
    helperMethods.skipLandingPagePlanOrTasksAdvert()
  })

  xit('Create Mind Map', () => {
    myMapsOverviewPage.openGetStartedWizzard();
    getStartedWizardPage.selectIconWithinSection('Mind Map', 'Layout')
    mindMapPage.backToOverviewPage()
    myMapsOverviewPage.validateExpectedNumberOfMindMapCardsOnOverviewPage(1)
  });

  xit('Create Mind Map and change Mind Map text', () => {
    let mindMapTitle = 'Some Cool Mind Map'

    myMapsOverviewPage.openGetStartedWizzard();
    getStartedWizardPage.selectIconWithinSection('Mind Map', 'Layout')
    cy.wait(5000)
    mindMapPage.setMindMapCoreText(mindMapTitle)
    mindMapPage.backToOverviewPage()
    myMapsOverviewPage.validateMindMapContainsText(1, mindMapTitle)
    myMapsOverviewPage.validateExpectedNumberOfMindMapCardsOnOverviewPage(1)
  });

  xit('Create Mind Map and delete it', () => {
    myMapsOverviewPage.openGetStartedWizzard();
    getStartedWizardPage.selectIconWithinSection('Mind Map', 'Layout')
    cy.wait(5000)
    mindMapPage.backToOverviewPage()
    myMapsOverviewPage.validateExpectedNumberOfMindMapCardsOnOverviewPage(1)
    myMapsOverviewPage.deleteMindMapOnOverviewPage()
    myMapsOverviewPage.validateExpectedNumberOfMindMapCardsOnOverviewPage(0)
    skipAfterEach=true
  });

  it('Create Mind Map Duplicate it and then delete it', () => {
    myMapsOverviewPage.openGetStartedWizzard();
    getStartedWizardPage.selectIconWithinSection('Mind Map', 'Layout')
    mindMapPage.backToOverviewPage()
    myMapsOverviewPage.validateExpectedNumberOfMindMapCardsOnOverviewPage(1)
    myMapsOverviewPage.duplicateMindMapOnPosition(1)
    myMapsOverviewPage.validateExpectedNumberOfMindMapCardsOnOverviewPage(2)
    myMapsOverviewPage.deleteMindMapOnOverviewPage()
    myMapsOverviewPage.validateExpectedNumberOfMindMapCardsOnOverviewPage(1)
  });

  xit('Create and search for Mind Map', () => {
    let mindMapTitle='Search Mind Map'
    myMapsOverviewPage.openGetStartedWizzard();
    getStartedWizardPage.selectIconWithinSection('Mind Map', 'Layout')
    cy.wait(5000)
    mindMapPage.setMindMapCoreText(mindMapTitle)
    mindMapPage.backToOverviewPage()
    mindMapPage.searchForCreatedMindMap(mindMapTitle)
    myMapsOverviewPage.validateExpectedNumberOfMindMapCardsOnOverviewPageAfterSearch(1)
    myMapsOverviewPage.closeSearchfield()
    skipAfterEach=false
  });

  afterEach(() => {
    if (!skipAfterEach){
      myMapsOverviewPage.deleteMindMapOnOverviewPage()
    }
     
  });

});
