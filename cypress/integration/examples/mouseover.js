/// <reference types="Cypress" />
describe('mouse over test suite',()=>
{
    it('mouse over test case', ()=>
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.contains('Top').click({force:true})
        cy.url().should('include','top')



    })


})