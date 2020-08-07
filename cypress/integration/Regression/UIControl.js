/// <reference types="Cypress" />

describe('UI control test suite', ()=>
{
    it('UI control test case', ()=> 
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //handle checkbox
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('[type="checkbox"]').check(['option2','option3'])
        
        //handle static drop down
        cy.get('select').select('option2').should('have.value','option2')

        //handle dynamic drop down
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($el, index, $list) =>
        {
            const countryName=$el.text()
            if(countryName==='India')
            {
                cy.wrap($el).click();
            }
                
        })
        cy.get('#autocomplete').should('have.value','India')


        //handle visible and invisible elements
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should("not.be.visible")

        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should("be.visible")


        //handle radio button
        cy.get('[name="radioButton"]').check('radio2').should('be.checked').and('have.value','radio2')
        


 




    })



})