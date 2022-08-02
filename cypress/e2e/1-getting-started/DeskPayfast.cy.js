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
  
    cy.visit('https://staging.sanasafinaz.com/gcc')
  
    //////////////////////////Satge///////////////
    cy.url().then(($el) => {
     if ($el=='https://staging.sanasafinaz.com/pk/'||$el=='https://staging.sanasafinaz.com/us'||$el=='https://staging.sanasafinaz.com/uk'
    ||$el=='https://staging.sanasafinaz.com/eu'||$el=='https://staging.sanasafinaz.com/gcc')  {
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
  
   //click on payfast
       cy.wait(2000)
       const pay= cy.get('#payfast')
       pay.click({force:true})
       cy.wait(2000)
  
       //placeorder
       cy.wait(6000)
       const place= cy.contains('Place Order')
       place.click({force:true})
       cy.wait(5000)
   
       cy.origin('https://apps.net.pk', () => {
  //enter card number
  const s1= cy.get('[name=CardNo')
  s1.type('4242424242424242')

 ///enter expiry date
 cy.get('#Months').select('2')
 cy.wait(3000)
       //enter year
  cy.get('#Years').select('2026')
    
  cy.get('#CVV').type('100')

         //click button
         cy.contains('Make Payment').click({ multiple: true ,force: true })
    
    })
      
      
  }
    
  
    else {
    
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
  
    
    }
   })
  })
   
})
