export class HomePage{
    clickAboutBtn(){
        cy.get('p.MuiTypography-root').contains('About').click()
    }
    clickLoginBtn(){
        cy.get('p.MuiTypography-root').contains('Log In').click()
    }
    assertAllNewsVisible(){
        cy.get('button.css-b6lsxj-MuiButtonBase-root-MuiCardActionArea-root').each(($news)=>{
            cy.wrap($news).should('be.visible')
        })
    }
    linkEdinBtn(){
        return cy.get('footer a.css-1cmksfb-MuiTypography-root-MuiLink-root').invoke('attr' , 'target' , '_self').get('svg[data-testid=LinkedInIcon]')
    }
    gitHubBtn(){
        return cy.get('footer a.css-1cmksfb-MuiTypography-root-MuiLink-root').invoke('attr' , 'target' , '_self').get('svg[data-testid=GitHubIcon]')
    }
    instragramBtn(){
       return cy.get('footer a.css-1cmksfb-MuiTypography-root-MuiLink-root').invoke('attr' , 'target' , '_self').get('svg[data-testid=InstagramIcon]')
    }
    assertLoggedOutAlertVisible(){
        cy.get("[role=alert]").contains("Logged out successfully!").should('be.visible')
    }
    assertBlogAddedSuccessfulTextVisible(){
        cy.get("[role=alert]").contains("Blog added successfully!").should('be.visible')
    }
    goToBlogIncludeText(header){
        cy.get('div.MuiTypography-h5').contains(header).click()
    }
    assertBlogDeletedAlert(){
        cy.get('[role=alert]').contains('Blog has been deleted successfully').should('be.visible')
    }
    assertBlogUpdatedAlert(){
        cy.get('[role=alert]').contains('Blog Updated Successfuly').should('be.visible')
    }
    assertRegisterSuccessAlertVisible(){
        cy.get('[role=alert]').contains('Registered successfully!').should('be.visible')
    }
    assertEmailAllReadyInUseAlertVisible(){
        cy.get('[role=alert]').contains('email-already-in-use').should('be.visible')
    }
}