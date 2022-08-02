/// <reference types="cypress" />

class GuestShippingAddress{
    email()
    {
        cy.wait(23000)
//click on email
const e=cy.get('#customer-email')
e.type('esha.intizar@rltsquare.com',{force: true })
cy.wait(3000)
return this
    }
   
    firstname()
    {
        const fn=cy.get('[name=firstname]').eq(0)
        fn.type('test',{ multiple: true,force: true })
        cy.wait(500)
        return this
    }
    lastname()
    {
        const ln=cy.get('[name=lastname]').eq(0)
        ln.type('test',{ multiple: true,force: true })
        cy.wait(500)
        return this
    }
    address()
    {
        const address=cy.get('[name="street[0]"]').eq(0)
        address.type('Unit A1,Thomas Street',{ multiple: true ,force: true })
        cy.wait(500)
        return this}

        country()
    {
        const country=cy.get('select').eq(0)
        country.select('PK')
        cy.wait(500)
        return this
    }
    region()
    {
        const region=cy.get('[name=region_id]').eq(0)
        region.select('1609',{ multiple: true ,force: true })
        cy.wait(1000)
        return this
    }
    city()
    {cy.wait(1000)
        const city=cy.get('*[class^="select2-selection__rendered"]').eq(0)
        city.click({multiple: true,force: true })
          cy.wait(4000)
return this
    }
        city1(){        
        //Select city
         const c1=cy.get('*[class^="select2-search__field"]')
         c1.type('attock{enter}')
         cy.wait(2000)
        return this
    }
    postcode()
    {
        const pc=cy.get('[name=postcode]').eq(0)
        pc.type('12345'),{ multiple: true,force: true }
        cy.wait(500)
        return this
    }
    
   
    phone()
    {
        const phone=cy.get('[name=telephone]').eq(0)
        phone.type('3214253552',{ multiple: true,force: true })
        cy.wait(1000)
        return this
    }
    shipping()
    {
        cy.wait(3000)
        const s=cy.get('*[class^="button action continue primary"]')
        s.click({ multiple: true,force: true })
        cy.wait(7000)
        return this
    
    }
 
    }
    export default GuestShippingAddress