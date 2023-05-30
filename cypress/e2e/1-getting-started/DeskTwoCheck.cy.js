Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

import Ad from '../../support/Add'
import Search from '../../support/Search.js'
import Filters from '../../support/Filters.js'
import Pdp from '../../support/Pdp.js'
import Viewbag from '../../support/Viewbag.js'
import GuestShippingAddress from '../../support/GuestShippingAddress.js'
import SelectCountry from '../../support/SelectCountry';

describe('Guest user', () => {
  beforeEach(() => {
    cy.viewport(1440, 1220)
  })

  it('Ad',() => {
    cy.visit('https://staging.sanasafinaz.com/pk')
    cy.url().then(($el) => {
      if ($el=='https://staging.sanasafinaz.com/pk'||$el=='https://staging.sanasafinaz.com/us'||$el=='https://staging.sanasafinaz.com/uk'||$el=='https://staging.sanasafinaz.com/eu'||$el=='https://staging.sanasafinaz.com/gcc')  {
        
        const ad = new Ad()
        ad.ad1()

        const country = new SelectCountry()
        country.country()

        const s = new Search()
        s.search()

        const p = new Pdp()
        p.pdp().selectSize().increaseQuantity().addToCart()

        const v = new Viewbag()
        v.viewbag1().clickcheckout()

        const g = new GuestShippingAddress()
        g.email().firstname().lastname().address().country().region().city().postcode().phone().shipping()

        //click 2checkout
        cy.wait(2000)
        const check= cy.get('#tco_checkout')
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

      
      } else {
        const ad = new Ad()
        ad.ad1()

        const country = new SelectCountry()
        country.country()

        const s = new Search()
        s.search()

        const p = new Pdp()
        p.pdp().sizedrop().quantity().addtocart()

        const v = new Viewbag()
        v.viewbag1().clickcheckout()

        const g = new GuestShippingAddress()
        g.email().firstname().lastname().address().country().region().city().postcode().phone().shipping()
       
      }
    })
  })
})
