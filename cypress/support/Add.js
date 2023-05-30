export default class Add{
    ad1(){
       cy.wait(5000)
        cy.get('#nl_close_btn').click({ multiple: true ,force: true })
        cy.wait(2000)
    }
}