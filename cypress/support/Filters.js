
    export default class Filters{
    size()
    {
        cy.contains('Select Size').click({ multiple: true ,force: true })
        cy.wait(2000)
        cy.get('[data-option-id="910"]').click({ multiple: true ,force: true })
        cy.wait(2000)
 
    }
  
}
    

  
  
 
  
