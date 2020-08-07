// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//

Cypress.Commands.add("selectProduct", (productName) => { 
    cy.get("[class='col-lg-3 col-md-6 mb-3']").each(($el,index,$list)=>
    {
    const proName=$el.find('.card-title').text()
    if(proName.includes(productName))
    {
        cy.wrap($el).find("button[class*='btn-info']").click()  
    }
})

})






// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
