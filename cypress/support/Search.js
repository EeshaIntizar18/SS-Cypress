/// <reference types="cypress" />
class Search{
    search()
    {
        cy.wait(2000)
        const s1= cy.get('*[class^="search-open"]')
        s1.click({force:true})
        cy.wait(2000)
        const s2=cy.get('[name=q]')
        s2.type('SS22ESE374{enter}',{force:true})
       return this
    }
}
export default Search