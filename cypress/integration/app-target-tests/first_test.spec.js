const { cyan } = require("color-name")

describe('Heading Text' , () => {
    it('Checking if content are the same', () => {
        cy.visit('https://target-app-cypress-tests.vercel.app/example-1');
        cy.get('h1')
            .invoke('text')
            .should('equal' , 'My Awesome Web Application');
        
    })
})