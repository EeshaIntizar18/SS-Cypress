/// <reference types="cypress" />
class Payfast{
    payfast()
    {
        cy.wait(2000)
        const s1= cy.get('#payfast')
        s1.click({force:true})
        cy.wait(2000)
      
       return this
    }
    placeorder()
    {
        cy.wait(2000)
        const s1= cy.contains('Place Order')
        s1.click({force:true})
        cy.wait(6000)
      
       return this  
    }
    iframe()
    {
        
       //Enter card number
       cy
       .get('iframe')
       .its('0.contentDocument.body').should('not.be.empty')
       .then(cy.wrap)
       .find('input[name="CardNo"]')
       .type('4242424242424242',{ multiple: true ,force: true })
       cy.wait(2000)
     
       //Enter exp date
     cy
       .get('iframe')
       .its('1.contentDocument.body').should('not.be.empty')
       .then(cy.wrap)
       .find('input[name="Months"]')
       .type('03',{ multiple: true ,force: true })
       cy.wait(2000)

          //Enter exp date
     cy
     .get('iframe')
     .its('2.contentDocument.body').should('not.be.empty')
     .then(cy.wrap)
     .find('input[name="Years"]')
     .type('03',{ multiple: true ,force: true })
     cy.wait(2000)
     
       //Enter cvc
     cy
       .get('iframe')
       .its('4.contentDocument.body').should('not.be.empty')
       .then(cy.wrap)
       .find('input[name="CVV"]')
       .type('100',{ multiple: true ,force: true })
     return this
        
        
      
     
    }
    
}

   

export default Payfast