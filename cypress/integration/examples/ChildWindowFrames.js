/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe'

describe('mouse over test suite',()=>
{
    it('mouse over test case', ()=>
    {
        //direct to child window
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#opentab').then(function(element)
        {
           const url= element.prop('href')
           cy.visit(url)

        })

        //handle iframes
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find("a[href*='mentorship']").eq(0).click()
        cy.iframe().find('[class*=pricing-title]').should('have.length', '2')







    })


})