describe('Esperando por elementos', ()=>{

    beforeEach(()=>{
        cy.visit('https://platzi.com/')
    })
    it('Esperar un tiempo definido', ()=>{

        cy.wait(5000)

    })

    it('Esperar un elemento', ()=>{

        cy.get('.ButtonLogin-cta', {timeout:6000}) //el timeout modifica el default

    })

    it.only('Esperar un elemento y hacer aserción', ()=>{

        cy.get('.ButtonLogin-cta', {timeout:6000}).should('be.visible') 

    })

    

   

})