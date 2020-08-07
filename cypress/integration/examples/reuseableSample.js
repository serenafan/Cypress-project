/// <reference types="Cypress" />
import HomePage from '../../support/pageObject/HomePage'
import ShopPage from '../../support/pageObject/ShopPage'
describe('mouse over test suite',()=>
{
    before(function()
    {
        cy.fixture('phoneName').then(function(data)
        {
            this.data=data
        })   
    })
    it('mouse over test case', function()
    {
        Cypress.config('defaultCommandTimeout',8000)
        const homepage=new HomePage
        const shoppage=new ShopPage
        cy.visit(Cypress.env('url')+"/angularpractice/")
        homepage.getShopButton().click()
        this.data.phone.forEach(element => {
             cy.selectProduct(element)
            })

        shoppage.getCartBtn().click()

        //sum of total price and compare with total amount displayed
        var sum=0;
        cy.get('tr td:nth-child(4) strong').each(($el,index,$list)=>
        {
             var res=$el.text().split(" ")
             res= res[1].trim()
             sum=Number(sum)+Number(res)
             
        })
        
        cy.get('h3 strong').then(function(totalAmt)
        {
            var amt=totalAmt.text().split(" ")
            amt=Number(amt[1].trim())
            expect(amt).to.equal(sum)
        })
       
        


        // cy.contains('Checkout').click()
        // cy.get('#country').type('China')
        // cy.get('.suggestions a').click()
        // cy.get('#checkbox2').check({force: true})
        // cy.contains('Purchase').click()
        // cy.get('.alert').should('include.text','Success')


        

        

    })

})