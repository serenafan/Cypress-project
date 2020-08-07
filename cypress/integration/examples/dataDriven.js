/// <reference types="Cypress" />
import HomePage from '../../support/pageObject/HomePage'

describe('mouse over test suite',()=>
{
    before(function(){
        cy.fixture('example').then(function(data)
        {
            this.data=data 
        })

    })

    it('mouse over test case', function()
    {
        const homepage = new HomePage()
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        homepage.getNameEditBox().type(this.data.name)
        homepage.getNameEditBox().should('have.attr','minlength','2')
        homepage.getTwowayDataBiding().should('have.value',this.data.name)
        homepage.getGender().select(this.data.gender)
        homepage.getdisabledradio().should('be.disabled')




    })


})