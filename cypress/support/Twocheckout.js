/// <reference types="cypress" />
class Twocheckout{
    twocheckout()
    {
        cy.wait(2000)
        const s1= cy.get('.tco_checkout')
        s1.click({force:true})
        cy.wait(2000)
      
       return this
    }
    placeorder()
    {
        cy.wait(2000)
        const s1= cy.contains('Continue Checkout')
        s1.click({force:true})
        cy.wait(2000)
      
       return this  
    }
  
    iframe()
    {
        
       //Enter card number
       cy
       .get('iframe')
       .its('0.contentDocument.body').should('not.be.empty')
       .then(cy.wrap)
       .find('input[name="card"]')
       .type('378282246310005',{ multiple: true ,force: true })
       cy.wait(2000)
     
       //Enter exp date
     cy
       .get('iframe')
       .its('1.contentDocument.body').should('not.be.empty')
       .then(cy.wrap)
       .find('input[name="date"]')
       .type('03',{ multiple: true ,force: true })
       cy.wait(2000)

          //Enter exp date
     cy
     .get('iframe')
     .its('2.contentDocument.body').should('not.be.empty')
     .then(cy.wrap)
     .find('input[name="cvv"]')
     .type('0330',{ multiple: true ,force: true })
     cy.wait(2000)
     
       //Enter cvc
     cy
       .get('iframe')
       .its('4.contentDocument.body').should('not.be.empty')
       .then(cy.wrap)
       .find('input[name="name"]')
       .type('Test test',{ multiple: true ,force: true })
     return this
        
        
      
     
    }
   
}
export default Twocheckout