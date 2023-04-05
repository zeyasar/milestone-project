/// <reference types = "cypress" />
import { HomePage } from "../PageClasses/HomePage";
import { AboutPage } from "../PageClasses/AboutPage";
const hp = new HomePage();
const ap = new AboutPage();
describe('US04-About Button Function' , ()=>{
    beforeEach(()=>{
        cy.visit("http://localhost:3000/");
        hp.clickAboutBtn();
    })
    it('US04-TC01 Kullanici about buttona tikladiginda ilgili sayfaya gidebilmelidir', () => {
        ap.assertVisibleTitle();
    });
    it('US04-TC02 Kullanici about kisminda Full-Stack Development yazisini gormelidir', () => {
        ap.assertAboutTextIncludeText("Full-Stack Development");
    });
    it('US04-TC03 Kullanici "Waypoint" logosuna tikladiginda anasayfaya gidebilmelidir', () => {
        ap.waypointBtn().click();
        cy.title().should('equal' , "Waypoint News");
    });
})