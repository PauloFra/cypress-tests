describe('Text Box with max characters', () => {
    it('Display the appropriate remaining characters count' , () => {
        cy.visit('https://target-app-cypress-tests.vercel.app/example-2');

        cy.get('[data-cy="chars-left-count"]')
        .as('valueVariable')
        .invoke('text')
        .should('equal', '15')


        cy.get('[data-cy=max-char-input]')
            .type('HelloWord') ;

        cy.get('@valueVariable')
        .invoke('text')
        .should('equal', '6')

        cy.get('[data-cy=max-char-input]')
        .type(' Paulo');

        cy.get('@valueVariable')
        .invoke('text')
        .should('equal', '0')
    });
    it('Prevents the user frokm typing more characters once max' , () => {
        cy.visit('https://target-app-cypress-tests.vercel.app/example-2');

        cy.get('input')
            .type('Pedro');

        cy.get('input')
            .should('have.attr' , 'value' , 'Pedro');

        cy.get('[data-cy="chars-left-count"]')
        .invoke('text')
        .should('equal' , '10')
    });
})