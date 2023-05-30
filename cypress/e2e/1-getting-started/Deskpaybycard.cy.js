Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
    
  import Ad from '../../support/Add'
  import Search from '../../support/Search.js'
  import Filters from '../../support/Filters.js'
  import Pdp from '../../support/Pdp.js'
  import Viewbag from '../../support/Viewbag.js'
  import GuestShippingAddress from '../../support/GuestShippingAddress.js'
  
  describe('Guest user', () => {
    beforeEach(() => {
      cy.viewport(1440, 1220)
    })
  
  it('Ad',() =>
  {
    cy.visit('')
    ////////////////////////Satge///////////////
    // cy.url().then(($el) => {
    //  if ($el=='https://staging.sanasafinaz.com/pk/'||$el=='https://staging.sanasafinaz.com/us'||$el=='https://staging.sanasafinaz.com/uk'
    // ||$el=='https://staging.sanasafinaz.com/eu'||$el=='https://staging.sanasafinaz.com/gcc')  {
     const ad=new Ad()
    ad.ad1()
  
    const s=new Search()
    s.search()
  
    const f=new Filters()
    // f.price()
    f.size()
  
    const p=new Pdp()
    p.pdp()
    p.sizedrop()
    p.quantity()
    p.addtocart()
    
  
    const v=new Viewbag()
    v.viewbag1()
    v.quantity()
    v.clickcheckout()
  
  
    const g=new GuestShippingAddress()
   g.email()
   g.firstname()
   g.lastname()
   g.address()
   g.country()
   g.region()
   g.city()
   g.city1()
   g.postcode()
   g.phone()
   g.shipping()
  
   cy.wait(2000)
   const s1= cy.get('#checkoutcom_card_payment')
   s1.click({force:true})
   cy.wait(4000)
    
   //Enter card number
    cy
    .get('iframe')
    .its('0.contentDocument.body').should('not.be.empty')
    .then(cy.wrap)
    .find('#checkout-frames-card-number')
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
 
      cy.wait(2000)
      cy.contains('Place Order').click({force:true})
      cy.wait(2000)
    
 
  //   }
  
  //   else {
    
  //   const s=new Search()
  //   s.search()
  
  //   const f=new Filters()
  //   // f.price()
  //   f.size()
  
  //   const p=new Pdp()
  //   p.pdp()
  //   p.sizedrop()
  //   p.quantity()
  //   p.addtocart()
    
  
  //   const v=new Viewbag()
  //   v.viewbag1()
  //   v.quantity()
  //   v.clickcheckout()
  
  
  // const g=new GuestShippingAddress()
  //  g.email()
  //  g.firstname()
  //  g.lastname()
  //  g.address()
  //  g.country()
  //  g.region()
  //  g.city()
  //  g.city1()
  //  g.postcode()
  //  g.phone()
  //  g.shipping()
  
  //   }
  // })
})
  })