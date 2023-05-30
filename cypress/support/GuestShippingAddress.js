/// <reference types="cypress" />

class GuestShippingAddress {
    email() {
        const e = cy.get('#customer-email', { timeout: 23000 });
        e.type('esha.intizar@rltsquare.com', { force: true });
        cy.wait(500)
        return this;
        
    }

    firstname() {
        const fn = cy.get('[name=firstname]').eq(0);
        fn.type('test', { multiple: true, force: true });
        cy.wait(500)
        return this;
    }

    lastname() {
        const ln = cy.get('[name=lastname]').eq(0);
        ln.type('test', { multiple: true, force: true });
        cy.wait(500)
        return this;
    }

    address() {
        const address = cy.get('[name="street[0]"]').eq(0);
        address.type('Unit A1,Thomas Street', { multiple: true, force: true });
        cy.wait(500)
        return this;
    }

    country() {
        const country = cy.get('select').eq(0);
        country.select('PK', { force: true });
        cy.wait(500)
        return this;
    }

    region() {
        const region = cy.get('[name=region_id]').eq(0);
        region.select('1609', { multiple: true, force: true });
        cy.wait(500)
        return this;
        
    }

    city() {
        
        cy.wait(3000)
        cy.scrollTo(0, 500)
        const city = cy.get('select').eq(2)
        cy.wait(2000)
        city.select('Attock', { multiple: true, force: true })
        cy.wait(500)
        return this;
    }

    postcode() {
        const pc = cy.get('[name=postcode]').eq(0);
        pc.type('12345', { multiple: true, force: true });
        cy.wait(500)
        return this;
    }

    phone() {
        const phone = cy.get('[name=telephone]').eq(0);
        phone.type('3214253552', { multiple: true, force: true });
        cy.wait(500)
        return this;
    }

    shipping() {
        cy.wait(3000)
        const s = cy.get('*[class^="button action continue primary"]');
        s.click({ multiple: true, force: true });
        cy.wait(4000);
        return this;
    }
}

export default GuestShippingAddress;
