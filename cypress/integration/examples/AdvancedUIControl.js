/// <reference types="Cypress" />

describe('Advanced UI control test suite',() =>{
    it('Advanced UI control test case', ()=>
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //handle alerts window
        cy.get('#alertbtn').click()

        //turn on window alert event and compare text
        cy.on('window:alert',(str)=>{
            //mocha
           expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        //window:confirm
        cy.get('#confirmbtn').click()

        cy.on('window:confirm',(str)=>{
        //mocha
           expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })


        //handle child tabs
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.go('back')
        cy.url().should('include','AutomationPractice')

        //tables
        cy.get('tr td:nth-child(2)').each(($el, index, $list)=>
        {
        
            if($el.text().includes('Selenium Automation in simple Python'))
            {
                cy.get('tr td:nth-child(2)').eq(index).next().then((coursePrice)=>
                {
                    const price=coursePrice.text()
                    expect(price).to.equal('25')


                })
            }


        })



    })


})