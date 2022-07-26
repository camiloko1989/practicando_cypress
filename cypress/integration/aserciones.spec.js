describe('Aserciones', ()=>{

    before(()=>{
        cy.visit('/automation-practice-form')
    })

    it('Asercion', ()=>{
        //cy.visit('/automation-practice-form');
        cy.url().should('include','demoqa.com')
        cy.get('#firstName').should('be.visible').should('have.attr', 'placeholder', 'First Name')
        
    })

    it('Asercion otra forma', ()=>{
        //cy.visit('/automation-practice-form');
        cy.url().should('include','demoqa.com')
        cy.get('#firstName').then((element)=>{
            expect(element).to.be.visible
            expect(element).to.have.attr('placeholder','First Name')
        })

        
        
    })

    it('Asercion tercera forma', ()=>{
        //cy.visit('/automation-practice-form');
        cy.url().should('include','demoqa.com')
        cy.get('#firstName').then((element)=>{
            assert.equal(element.attr('placeholder'), 'First Name')

        })
    })
    

})