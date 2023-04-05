export class BlogPage{
    clickDeleteBlogBtn(){
        cy.get('[type=button]').contains('Delete Blog').click()
    }
    clickUpdateBlogBtn(){
        cy.get('[type=button]').contains('Update Blog').click()
    }
}