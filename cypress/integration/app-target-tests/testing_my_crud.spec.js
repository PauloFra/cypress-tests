describe('Deleting a technology from site' , () => {
    it('Creating a new user', () => {
        cy.visit('https://sistema-alura.vercel.app/createaccount')
        
        cy.get('h2')
        .invoke('text')
        .should('equal' , 'Create Account');

        cy.get('h3')
        .invoke('text')
        .should('equal' , 'Create Account here lorem in');

        cy.get('#email')
        .type('myemail@gmail.com');

        cy.get('#name')
        .type('Paulo Fraga');

        cy.get('#password')
        .type('Abc123abc');

        
        cy.get('#email')
        .should('have.attr' , 'value' , 'myemail@gmail.com');

        cy.get('#name')
        .should('have.attr' , 'value' , 'Paulo Fraga');

        cy.get('#password')
        .should('have.attr' , 'value' , 'Abc123abc');      

        cy.get('button')
        .click();
    })
    it('Doing Login in page', () => {
        cy.visit('https://sistema-alura.vercel.app/login')

        cy.get('h2')
        .invoke('text')
        .should('equal' , 'Login');

        cy.get('h3')
        .invoke('text')
        .should('equal' , 'sign here lorem in');

        cy.get('#name')
        .type('Meu Nome é Paulo').wait(3000);

        cy.get('#password')
        .type('Abc123abc');

        cy.get('[type="checkbox"]').check()

        cy.get('#name')
        .should('have.attr' , 'value' , 'Meu Nome é Paulo');

        cy.get('#password')
        .should('have.attr' , 'value' , 'Abc123abc');

        cy.get('button')
        .click();
    });
     it('Going to home', () => {
        cy.visit('https://sistema-alura.vercel.app/')
    });
    
})