describe('Guardando Elementos', ()=>{

    
    it('Repeticion', ()=>{
        cy.visit('/automation-practice-form');
        //obteniendo el elemento padre
        cy.contains('.header-wrapper','Widgets').parent()
        //obteniendo los elementos padres
        cy.contains('.header-wrapper','Widgets').parents()
        //encontrar elemento especifico
        cy.contains('.header-wrapper','Widgets').parents().find('label')
    });

    it('Evitar repeticion', ()=>{
        //cy.visit('/automation-practice-form')
        cy.get('input[placeholder="First Name"]').parents('form').then((form) => {

            const inputs = form.find('input') //form e input son jquerys
            const divs = form.find('div')
            const labels = form.find('label')

            expect(inputs.length).to.eq(15)
            cy.wrap(inputs).should('have.length',15) //convierte inputs en un elemento de Cypress
            expect(divs.length).to.eq(70)
            expect(labels.length).to.eq(16)

           

        })

        cy.get('form').find('label')

    })

})