Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});


import Ad from '../../support/Add'
import Search from '../../support/Search.js'
import Filters from '../../support/Filters.js'
import Pdp from '../../support/Pdp.js'
import Viewbag from '../../support/Viewbag.js'
import GuestShippingAddress from '../../support/GuestShippingAddress.js'
import Twocheckout from '../../support/Twocheckout.js'
import { idText } from 'typescript';


  describe('Guest user', () => {
    beforeEach(() => {
      cy.viewport(1440, 1220)
    })
  
  it('test1',() =>
  {
  
    cy.visit('https://staging.sanasafinaz.com/us')
  
    //////////////////////////Satge///////////////
    cy.url().then(($el) => {
     if ($el=='https://staging.sanasafinaz.com/pk/'||$el=='https://staging.sanasafinaz.com/us'||$el=='https://staging.sanasafinaz.com/us'
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
  
 ////click 2checkout
        cy.wait(2000)
        const check= cy.contains('A-MAX, Paypal, Master and Visa through 2Checkout')
        check.click({force:true})
        cy.wait(2000)
      
  //click placeorder
        cy.wait(2000)
        const cont= cy.contains('Continue Checkout')
        cont.click({force:true})
        cy.wait(2000)
      
   
      //enter card number
      const s1= cy.get('[name=card')
       s1.type('4242424242424242')

      ///enter expiry date
            const s2= cy.get('body > div > div:nth-child(1) > div.app-container > div > div > form > div.app-panel.card-details > div.app-panel-body > div:nth-child(1) > div.app-field.card-date > div')
            s2.type('032030')

            //enter cvc
      const s3= cy.get('[name=cvv')
      s3.type('100')

              //click button
              const s4= cy.contains('Place order')
              s4.click()




    
  //   })  

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
