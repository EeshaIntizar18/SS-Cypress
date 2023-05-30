/// <reference types="cypress" />
export default class Pdp {

  pdp() {
    //clcik on product
    cy.get('#maincontent > div > div.column.main > div.search.results > div.products.wrapper.grid.products-grid > ol > li > div > a > span > span > img').click({force:true})
    cy.wait(4000)
    return this
  }
  selectSize() {
    cy.scrollTo('500,0')
    //click on size
    cy.get(`[data-option-id="43"]`).contains('S').click()
    return this
  }

  increaseQuantity() {
    
    cy.get('*[class^="qty-increase"').click()
    return this
  }
  addToCart() {
    //click on add to cart button
    cy.get('#product-addtocart-button').click()
    cy.wait(1000)
    cy.get('.minicart-wrapper').should('be.visible')
    return this
  }
}
