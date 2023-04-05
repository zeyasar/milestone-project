export class NewBlogPage{
    typeHeader(header){
        cy.get("[name=header]").type(header);
    }
    typeSubtitle(subTitle){
        cy.get('[name=subtitle]').type(subTitle)
    }
    typeImageUrl(imgUrl){
        cy.get('[name=imageUrl]').type(imgUrl)
    }
    typeContent(content){
        cy.get('[name=content]').type(content)
    }
    clickSubmitBtn(){
        cy.get("[type=submit]").click()
    }
    

}