/// <reference types="cypress" />
class Pdp{
    pdp()
    {
  //clcik on product
  cy.wait(2000)
  const p1=cy.contains('SS21GWT107')
  p1.click({ multiple: true ,force: true })
  cy.wait(8000)
  return this
    }  
  
    sizedrop()
    {
    //click on size 
  cy.wait(3000)
  const s1=cy.get('[data-option-id="910"]')
  s1.click({ multiple: true ,force: true })
  cy.wait(3000)
  return this
    }

  
    quantity(){
      cy.scrollTo('top')
      cy.wait(4000)
      //clcik on size
      const s2= cy.get('*[class^="qty-increase"]')
      s2.click({ multiple: true ,force: true })
      return this
      }
      
  
  
  addtocart(){
    //click on add to cart button
    cy.wait(3000)
   const a1= cy.get('#product-addtocart-button').contains('Add to Cart').should('be.visible').trigger('mouseover')
   a1.click({ multiple: true })
    cy.wait(8000)
    return this
  
  }
 
  }
  export default Pdp 