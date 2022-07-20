

//     price()
//     {
     
//       cy.wait(2000)
//   //clcik on price
//   cy.contains('Price').click({ multiple: true ,force: true })
//   cy.wait(4000)
//   cy.contains('PKR 0').click({ multiple: true ,force: true })
//   cy.wait(2000)

    //}  
    export default class Filters{
    size()
    {
        cy.wait(1000)
        cy.contains('Select Size').click({ multiple: true ,force: true })
        cy.wait(2000)
        cy.get('[data-option-id="910"]').click({ multiple: true ,force: true })
        cy.wait(2000)
 
    }
  
}
    

  
  
 
  
