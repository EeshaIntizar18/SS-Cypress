/// <reference types="cypress" />
class Search{
    search()
    {
        cy.wait(2000)
        const s1= cy.get('*[class^="search-open"]')
        s1.click({force:true})
        cy.wait(2000)
        const s2=cy.get('[name=q]')
        s2.type('kids top{enter}',{force:true})
        cy.wait(4000)
       return this
    }
}
export default Search