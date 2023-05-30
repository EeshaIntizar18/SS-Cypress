/// <reference types="cypress" />
   class Viewbag {
    viewbag1() {
      cy.wait(4000)
      cy.get('*[class^="action showcart"]').click({ multiple: true ,force: true });
      cy.wait(2000);
      return this;
    }
    
    clickcheckout() {
      cy.wait(5000);
      cy.get('*[class^="action primary checkout"]').contains('Proceed to Checkout').click({ multiple: true ,force: true });
      cy.wait(8000);
      return this;
    }
  }
  
  export default Viewbag;
  