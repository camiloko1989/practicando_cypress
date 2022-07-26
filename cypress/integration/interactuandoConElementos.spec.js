describe('interactuando con elementos', ()=>{

    it('Click', ()=>{

        cy.visit('/buttons') 
        cy.get('button').eq(3).click()
        cy.get('#dynamicClickMessage').should('be.visible').and('contain','You have done a dynamic click')

    })

    it('Double Click', ()=>{

        cy.visit('/buttons') 
        cy.get('#doubleClickBtn').dblclick()
        cy.get('#doubleClickMessage').should('be.visible').and('contain','You have done a double click')

    })

    it('Right Click', ()=>{

        cy.visit('/buttons') 
        cy.get('#rightClickBtn').rightclick()
        cy.get('#rightClickMessage').should('be.visible').and('contain','You have done a right click')

    })

    it('Force Click', ()=>{

        cy.visit('/dynamic-properties') 
        cy.get('#enableAfter').click({timeout:0, force:true})
        //cy.get('#rightClickMessage').should('be.visible').and('contain','You have done a right click')

    })

    it('Click por position', ()=>{

        cy.visit('/dynamic-properties') 
        cy.get('button').eq(3).parent().parent().click('topRight')


    })

    it('Input tipo texto', ()=>{

        cy.visit('/automation-practice-form') 
        cy.get('#firstName').type('Camilo')
        cy.get('#lastName').type('Jimenez')

        cy.get('#firstName').type('{selectAll}{backspace}') //borra el campo
        cy.get('#firstName').type('Hernan')
        cy.get('#firstName').clear()

    })

    it('Checkboxes y radio botones', ()=>{

        cy.visit('/automation-practice-form') 
        //cy.get('#gender-radio-1').click({force:true}) 
        cy.get('label[for="gender-radio-1"]').click()
        //cy.get('#hobbies-checkbox-1').click({force:true})
        //cy.get('#hobbies-checkbox-1').check({force:true})
        cy.get('label[for="hobbies-checkbox-1"]').click()
    })

    it.only('Extrayendo Informacion', ()=>{

        cy.visit('/automation-practice-form') 
        cy.get('#firstName').as('nombre')
        cy.get('@nombre').type('Camilo')

        cy.get('@nombre').then( ($nombre)=>{

            expect($nombre.val()).to.equal('Camilo')

        })
    })

})