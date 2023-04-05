export class  AboutPage{
    assertVisibleTitle(){
        cy.get('h1').should('be.visible');
    }
    assertAboutTextIncludeText(text){
        cy.get('h2.css-1gkf2n0-MuiTypography-root').should('include.text' , text);
    }
    waypointBtn(){
        return cy.get('p.MuiTypography-root').contains("Waypoint")
    }
}