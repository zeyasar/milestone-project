/// <reference types = "cypress" />
import { HomePage } from "../PageClasses/HomePage";
import { LoginPage } from "../PageClasses/LoginPage";
import { RegisterPage } from "../PageClasses/RegisterPage";
const hp = new HomePage();
const lp = new LoginPage();
const rp = new RegisterPage();
describe('US06 Kullanici siteye üye olmak icin gerekli islemleri yapmalidir' , ()=>{
    it('US06-TC01 Kullanici geçerli bilgilerle siteye üye olabilmelidir', () => {
        cy.visit('http://localhost:3000/');
        hp.clickLoginBtn();
        lp.clickSignUpBtn();
        //register işlemi için username , surname , email, password kısmını değiştirmeniz gerekebilir.
        //aksi takdirde bu test fail olacaktır!!!
        rp.signUpThisSite("username" , "surname" , "username@gmail.com" , "Password1234.");
        hp.assertRegisterSuccessAlertVisible();
    });
})