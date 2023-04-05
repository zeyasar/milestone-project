/// <reference types="cypress" />
import { HomePage } from "../PageClasses/HomePage";
import { LoginPage } from "../PageClasses/LoginPage";
import { NewBlogPage } from "../PageClasses/NewBlogPage";
import { BlogPage } from "../PageClasses/BlogPage";
const hp = new HomePage();
const lp = new LoginPage();
const nbp = new NewBlogPage();
const bp = new BlogPage();
describe('US05 Kullanici kendi yazmis olduğu blog yazisini ekleyebilmedir' , ()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000/')
        hp.clickLoginBtn();
        lp.loginWithUsernameAndPassword(Cypress.config('email') , Cypress.config('password'))
        cy.get('[aria-label=close]').click()
        lp.clickOpenSettingsBtn()
        lp.clickNewBlogBtn()
    })
    it('US05-TC01 Kullanici gerekli bilgileri girerek blog yazisi oluşturmalidir ve silmelidir', () => {
        nbp.typeHeader("Flamingos")
        nbp.typeSubtitle("Red Flamingos")
        nbp.typeImageUrl("//https://html.com/wp-content/uploads/flamingo.webp")
        nbp.typeContent("Flamingos are large migratory birds known for their long legs and pink feathers.")
        nbp.clickSubmitBtn()
        hp.assertBlogAddedSuccessfulTextVisible()
        hp.goToBlogIncludeText('Flamingos');
        bp.clickDeleteBlogBtn();
        hp.assertBlogAddedSuccessfulTextVisible();

    });
    it('US05-TC02 Kullanici gerekli bilgileri girerek blog yazisini oluşturmali ve update edebilmelidir', () => {
        nbp.typeHeader("Flamingos")
        nbp.typeSubtitle("Red Flamingos")
        nbp.typeImageUrl("//https://html.com/wp-content/uploads/flamingo.webp")
        nbp.typeContent("Flamingos are large migratory birds known for their long legs and pink feathers.")
        nbp.clickSubmitBtn()
        hp.goToBlogIncludeText('Flamingos');
        bp.clickUpdateBlogBtn();
        nbp.typeContent("Updated Content")
        nbp.clickSubmitBtn()
        hp.assertBlogUpdatedAlert();
    });
    
})