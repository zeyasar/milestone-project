/// <reference types = "cypress" />
import { HomePage } from "../PageClasses/HomePage";
import { LoginPage } from "../PageClasses/LoginPage";
import { RegisterPage } from "../PageClasses/RegisterPage";
const hp = new HomePage();
const lp = new LoginPage();
const rp = new RegisterPage();
describe('US06 Kullanici siteye üye olmak icin gerekli islemleri yapmalidir' , ()=>{
    it('US06-TC01 Kullanici sistemde var olan email ile siteye üye olamamalidir', () => {
        cy.visit('http://localhost:3000/');
        hp.clickLoginBtn();
        lp.clickSignUpBtn();
        rp.signUpThisSite("username" , "surname" , "username@gmail.com" , "Password1234.");
        hp.assertEmailAllReadyInUseAlertVisible();
    });
    it('Kullanici bilgileri girmedigi zaman gerekli uyari mesajlari cikmalidir', () => {
        cy.visit('http://localhost:3000/');
        hp.clickLoginBtn();
        lp.clickSignUpBtn();
        rp.clickRegisterBtn();
        rp.assertAllReqiuredAlertTextVisible();
    });
})