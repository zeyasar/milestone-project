export class RegisterPage{
    signUpThisSite(username , surname , email  , password){
        cy.get('[name=username').type(username)
        cy.get('[name=surname]').type(surname)
        cy.get('[name=email]').type(email)
        cy.get('[name=password]').type(password)
        cy.get('[name=password2]').type(password)
        cy.get('button.MuiButton-contained').click()
    }

}