describe('Tipos de localizadores', ()=>{

    it('Obteniendo por un tag', () => {
        cy.visit('/automation-practice-form');
        cy.get('input')
    });

    it('Obtener por medio de un atributo', ()=>{
        //cy.visit('/automation-practice-form');
        cy.get('[placeholder = "First Name"]');

    });

    it('Obtener por medio de un atributo y un tag', ()=>{
        //cy.visit('/automation-practice-form');
        cy.get('input[placeholder = "First Name"]');

    });

    it('Obtener por medio de un id', ()=>{
        cy.get('#firstName');

    });

    it('Obtener por medio de una class', ()=>{
        cy.get('.mr-sm-2.form-control'); // se pone . antes del nombre de la clase

    });

    it('Obtener por medio de contains', ()=>{
        cy.contains('Reading')
        cy.contains('.header-wrapper','Widgets')

    });

    it('Obtener por medio de parents', ()=>{
        //obteniendo el elemento padre
        cy.contains('.header-wrapper','Widgets').parent()
        //obteniendo los elementos padres
        cy.contains('.header-wrapper','Widgets').parents()
        //encontrar elemento especifico
        cy.contains('.header-wrapper','Widgets').parents().find('label')
    });

})