/// <reference types="cypress" />
import { HomePage } from "../PageClasses/HomePage"
const hp = new HomePage();
describe('US01 Kullanici HomePage deki iconlarin fonksiyonlarini test eder', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:3000/')
  })
  it('US01-TC01 Kullanici HomePage de GitHub in ikonuna tiklar ve GitHub hesabina gittigini dogrular', () => {
    hp.gitHubBtn().click()
    cy.title().should('include','')
  })
  it('US01-TC02 Kullanici HomePage de Instagram in ikonuna tiklar ve Instagram hesabina gittigini dogrular', () => {
    hp.instragramBtn().click()
    cy.title().should('include','')
  })
  it('US01-TC03 Kullanici HomePage de LinkedIn in ikonuna tiklar ve LinkedIn hesabina gittigini dogrular', () => {
    hp.linkEdinBtn().click()
    cy.title().should('include','')
  })
})