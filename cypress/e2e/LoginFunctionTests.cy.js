/// <reference types="cypress" />
import { HomePage } from "../PageClasses/HomePage";
import { LoginPage } from "../PageClasses/LoginPage";
const hp = new HomePage();
const lp = new LoginPage();
describe('US03 Kullanici login işlemleri yapacaktir' , ()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000/')
    })
    it('US03-TC01 Kullanici gecerli username ve sifre ile giris yapabilmelidir', () => {
        hp.clickLoginBtn();
        lp.loginWithUsernameAndPassword(Cypress.config('email') , Cypress.config('password'))
        lp.assertLoginSuccesfullyText()
    });
    it('US03-TC02 Kullanici gecersiz username ve sifre ile giris yapamamalidir', () => {
        hp.clickLoginBtn();
        lp.loginWithUsernameAndPassword("invalidEmail@test.com" , "invalidEmail1234.");
        lp.assertLoginUnsuccesfullText();
    });
    it('US03-TC03 Kullanici login isleminden sonra kullanici bilgilerini gormelidir', () => {
        hp.clickLoginBtn()
        lp.loginWithUsernameAndPassword(Cypress.config('email') , Cypress.config('password'))
        lp.assertUserTabTextIncludeUserInfo("Deneme")
    });
    it('US03-TC04 Kullanici login isleminden sonra logout islemi yapabilmelidir', () => {
        hp.clickLoginBtn()
        lp.loginWithUsernameAndPassword(Cypress.config('email') , Cypress.config('password'))
        lp.clickOpenSettingsBtn()
        lp.clickLogOutBtn()
        hp.assertLoggedOutAlertVisible()
    });
})