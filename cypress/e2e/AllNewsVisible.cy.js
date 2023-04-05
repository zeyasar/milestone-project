/// <reference types = "cypress" />
import { HomePage } from "../PageClasses/HomePage";
const hp = new HomePage();
describe('US02 Kullanici HomePage de bütün haberleri gormelidir' , ()=>{
    it('US02-TC01 Kullanici HomePage de bütün haberleri gormelidir', () => {
        cy.visit('http://localhost:3000/')
        hp.assertAllNewsVisible()
         
    });
})