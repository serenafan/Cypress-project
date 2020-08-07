/// <reference types="Cypress" />


describe("my second test suite", ()=> {
    it("My second test case", ()=> {

        //test steps:
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type("ca")
        cy.wait(2000)
        cy.get('.products').as('productLocatoer')
        cy.get('@productLocatoer').find('.product').each(($el, index, $list) => {
            const textVeg=$el.find('h4.product-name').text()
            if(textVeg.includes('Cashews'))
            {
                cy.wrap($el).contains('ADD TO CART').click() 
            }

        })  
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()


    }) 
})   
