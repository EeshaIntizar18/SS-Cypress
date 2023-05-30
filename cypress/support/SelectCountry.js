/// <reference types="cypress" />
class SelectCountry{
    country()
    {
        cy.wait(500)
        cy.get('*[class^="label switcher-label"]').contains('Select Country').click({ multiple: true ,force: true })
        cy.wait(3000)
        cy.get('*[class^="country-name"').contains('Pakistan ').click({ multiple: true ,force: true })
        cy.wait(2000)
       return this
    }
}
export default SelectCountry