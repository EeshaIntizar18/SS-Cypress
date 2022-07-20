/// <reference types="cypress" />
class Paybycard{
    paybycard()
    {
        cy.wait(2000)
        const s1= cy.get('#checkoutcom_card_payment')
        s1.click({force:true})
        cy.wait(2000)
      
       return this
    }
    c() {
       
        
        //Enter card number
        cy
      .get('iframe')
      .its('0.contentDocument.body').should('not.be.empty')
      .then(cy.wrap)
      .find('input[name="cardnumber"]')
      .type('4242424242424242',{ multiple: true ,force: true })
      cy.wait(2000)
    
      //Enter exp date
    cy
      .get('iframe')
      .its('0.contentDocument.body').should('not.be.empty')
      .then(cy.wrap)
      .find('input[name="exp-date"]')
      .type('0330',{ multiple: true ,force: true })
      cy.wait(2000)
    
      //Enter cvc
    cy
      .get('iframe')
      .its('0.contentDocument.body').should('not.be.empty')
      .then(cy.wrap)
      .find('input[name="cvc"]')
      .type('100',{ multiple: true ,force: true })
    return this
   
    
    }
}
export default Paybycard