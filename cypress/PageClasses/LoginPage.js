export class LoginPage{
    loginWithUsernameAndPassword(username, password){
        cy.get('[name=email]').type(username.toString())
        cy.get('[name=password]').type(password.toString())
        cy.get(':nth-child(3) > .MuiButton-root').click()
    }
    clickSignUpBtn(){
        cy.get('a[style]').click()
    }
    assertLoginSuccesfullyText(){
        cy.get("[role=alert]").contains('Logged in successfully!').should('be.visible')
    }
    assertLoginUnsuccesfullText(){
        cy.get("[role=alert]").contains('user-not-found').should('be.visible')
    }
    assertUserTabTextIncludeUserInfo(username){
        cy.get("button[aria-label='Open settings'] p").should('include.text' , username);
    }
    clickProfileBtn(){
        cy.get("[role=menuitem] p").contains("Profile").click();
    }
    clickOpenSettingsBtn(){
        cy.get("button[aria-label='Open settings']").click();
    }
    clickLogOutBtn(){
        cy.get("[role=menuitem] p").contains("Logout").click()
    }
    clickNewBlogBtn(){
        cy.get("[role=menuitem] p").contains("New Blog").click()
    }
}