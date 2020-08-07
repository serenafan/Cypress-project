/// <reference types="Cypress" />


describe("my first test suite", ()=> {
    it("My first test case", ()=> {

        //test steps:
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type("ca")
        cy.wait(2000)
        cy.get('.products').as('productLocatoer')
        cy.get('@productLocatoer').find('.product').should('have.length', 4)
        cy.get('@productLocatoer').find('.product').each(($el, index, $list) => {
            const textVeg=$el.find('h4.product-name').text()
            if(textVeg.includes('Cashews'))
            {
                cy.wrap($el).contains('ADD TO CART').click() 
            }

        })  
        //Assertion
        cy.get('.brand').should('have.text','GREENKART')
        



        // cy.get('.brand').then(function(logo)
        // {
        //     const logoText=logo.text()
        // })


       
    

    })

})