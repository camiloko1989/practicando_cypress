describe('interactuando con elementos', ()=>{

    let texto
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

    it('Extrayendo Informacion', ()=>{

        cy.visit('/automation-practice-form')
		// a veces fallara porque lo cubre otro elemento

		cy.get('#firstName').as('nombre')
		cy.get('@nombre').type('Camilo')
		// Primera manera de hacerlo
		cy.get('@nombre').then(($nombre) => {
		    texto = $nombre.val()
			expect(texto).to.equal('Camilo')

        })
        // Segunda manera de hacerlo, invoke solo invoca una funcion que en este caso el elemento que nos regresa el get , como jquery tiene
		cy.get('@nombre').invoke('val').should('equal', 'Camilo')
		cy.get('@nombre').invoke('val').as('nombreGlobal')
    })

    it('Interactuando con dropdown/select', ()=>{

        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
        cy.get('.custom-select').select(10)
        cy.get('.custom-select').select('3').should('have.value','3')
        cy.get('.custom-select').select('Greece').should('have.value', '4' )
	})

    it('Interactuando con dropdown/select dinamico', ()=>{

        cy.visit('https://react-select.com/home')
        cy.get('#react-select-6-input').type(' ') //con un espacio se muestran todas las opciones del select
        //iterando por los elementos
        /*cy.get('#react-select-6-listbox')
			.children()
			.children()
			.each(($el, index, $list) => {
				if ($el.text() === 'Red') {
					$el.on('click')
				}
			})*/
        //forma facil
        cy.get('#react-select-6-option-3').click()
	})

    /*it('Interactuando con tablas', ()=>{

        //encontrar los nombres de los encabezados de la tabla
        cy.visit('https://www.w3schools.com/html/html_tables.asp')
        cy.get('#customers').find('th').each(($el)=>{
            cy.log($el.text())
        })

        //encontrar solo primer elemento del encabezado
        cy.get('#customers').find('th').first()
	})*/

    it('Interactuando con date pickers', ()=>{

        
        cy.visit('https://material.angular.io/components/datepicker/overview')
        cy.get('datepicker-overview-example').find('input').eq(0).type('11/03/2022')
        
        cy.get('datepicker-overview-example').find('svg').click()
	})

    it('Interactuando con modaless', ()=>{

        
        cy.visit('/modal-dialogs')
        cy.get('#showSmallModal').click()
        cy.get('#closeSmallModal').click()
	})

    it('Interactuando con pop-ups', ()=>{

        cy.visit('/alerts')
        /*const stub = cy.stub()
        cy.on('window:confirm',stub)
        cy.get('#confirmButton').click().then(()=>{
            expect(stub.getCall(0)).to.be.calledWith('Do you confirm action?')
        }) 

        //otra forma
        cy.get('#confirmButton').click()
        cy.on('window:confirm', (confirm)=>{
            expect(confirm).to.equal('Do you confirm action?')
        })
        cy.contains('You selected Ok').should('exist') */

        //rechazar popup
        cy.get('#confirmButton').click()
        cy.on('window:confirm', (confirm)=>{
            expect(confirm).to.equal('Do you confirm action?')
            return false
        })
        cy.contains('You selected Cancel').should('exist') 
	})

    it.only('Interactuando con tooltips', ()=>{
       
        cy.visit('/tool-tips')
        cy.get('#toolTipButton').trigger('mouseover')
        cy.contains('You hovered over the Button').should('exist')
        cy.get('#toolTipButton').trigger('mouseout') //quita el mouse de encima
        cy.contains('You hovered over the Button').should('not.exist')
	})

})