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
    Cypress.Cookies.preserveOnce('session_id', 'remember_token')
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

        cy.wait(2000);
        cy.get('#cashondelivery').click({force:true})
        cy.wait(1000)
        cy.get('#checkout-payment-method-load > div > div > div.payment-method._active > div.payment-method-content > div.actions-toolbar > div > button').click({force:true})
      
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
