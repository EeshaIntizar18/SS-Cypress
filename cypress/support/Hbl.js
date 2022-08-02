/// <reference types="cypress" />
class Hbl{
    hbl()
    {
        cy.wait(2000)
        const s1= cy.get('#hbl_pay')
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
export default Hbl