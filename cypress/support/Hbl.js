class Hbl {
    hbl() {
        const HBL_PAY_BUTTON = '#hbl_pay';
        cy.get(HBL_PAY_BUTTON).click({ force: true });
        return this;
    }

    placeorder() {
        const PLACE_ORDER_BUTTON = 'Place Order';
        cy.contains(PLACE_ORDER_BUTTON).click({ force: true });
        return this;
    }
}

export default Hbl;
