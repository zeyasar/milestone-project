export class ProfilePage{
    assertProfileVisible(){
        cy.get("div.css-j7qwjs").should('be.visible')
    }
}