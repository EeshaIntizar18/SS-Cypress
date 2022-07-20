/// <reference types="cypress" />
class Cod{
    cod()
    {
        cy.wait(2000)
        const s1= cy.get('#cashondelivery')
        s1.click({force:true})
        cy.wait(2000)
      
       return this
    }
    placeorder()
    {
        cy.wait(2000)
        const s1= cy.contains('Place Order')
        s1.click({force:true})
        cy.wait(2000)
      
       return this  
    }
}
export default Cod