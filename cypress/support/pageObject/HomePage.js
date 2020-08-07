class HomePage
{
    getNameEditBox()
    {
       return cy.get('form div:nth-child(1) input')
    }

    getGender()
    {
        return cy.get('select')
    }

    getTwowayDataBiding()
    {
        return cy.get('h4 input')
    }

    getdisabledradio()
    {
        return cy.get("[for='inlineRadio3']")
    }

    getShopButton()
    {
        return cy.get('.nav-link').eq(1)
    }

}

export default HomePage