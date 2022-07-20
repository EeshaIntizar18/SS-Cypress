/// <reference types="cypress" />
class Viewbag{
   
    viewbag1()
 {
 cy.wait(4000)
//click on view bag
const v1=cy.get('*[class^="action showcart"]')
v1.click({ multiple: true ,force: true })
cy.wait(2000)
return this
    }
   
   quantity(){
   cy.wait(2000)
   
   //click on quantity swatch
   const q1=cy.get('[data-role="cart-item-qty"]').clear()
   q1.type('5',{ multiple: true ,force: true })
   cy.wait(4000)
   return this
   }
   
   clickcheckout(){
       cy.wait(8000)
   //click on checkout
  const a=cy.get('*[class^="action primary checkout"]').contains('Proceed to Checkout')
  a.click({ multiple: true ,force: true })
   cy.wait(8000)
   return this
   
       }
   }
   export default Viewbag