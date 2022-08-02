/// <reference types="cypress" />
export default class Pdp{
    pdp()
    {
  //clcik on product
  cy.contains('SS21GWT107').click({ multiple: true ,force: true })
  cy.wait(6000)
  return this
  
    }  
  
    sizedrop()
    {
    //click on size 
  cy.wait(5000)
 cy.get('[data-option-id="901"]').click({ multiple: true ,force: true })
 return this

    }
  
  
    quantity(){
  cy.wait(5000)
   cy.scrollTo('top')
      cy.wait(4000)
      //clcik on size
    cy.get('*[class^="qty-increase"]',{ timeout: 3000 }).click({ multiple: true ,force: true })
    return this
  }
  
  addtocart(){
  //click on add to cart button
 
  cy.get('#product-addtocart-button',{ timeout: 3000 }).click({ multiple: true ,force: true })
  return this
  
  }
 
  }
  
