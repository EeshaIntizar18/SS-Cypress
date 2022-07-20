Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  
  
  import Ad from '../../support/Add'
  import Search from '../../support/Search.js'
  import Filters from '../../support/Filters.js'
  import Pdp from '../../support/Pdp.js'
  import Viewbag from '../../support/Viewbag.js'
  import GuestShippingAddress from '../../support/GuestShippingAddress.js'
  import Cod from '../../support/Cod.js'
  import { idText } from 'typescript';
  
  
  describe('Guest user', () => {
    beforeEach(() => {
      cy.viewport(1440, 1220)
    })
  
  it('Ad',() =>
  {
  
    cy.visit('/')
  
    //////////////////////////Satge///////////////
    cy.url().then(($el) => {
      if ($el=='https://staging.sanasafinaz.com/pk'||$el=='https://staging.sanasafinaz.com/us'||$el=='https://staging.sanasafinaz.com/us'
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
   g.citydrop()
   g.postcode()
   g.phone()
   g.shipping()
  
    const c=new Payfast()
    c.hbl()
    c.placeorder()
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
  