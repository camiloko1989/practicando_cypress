describe('Navegacion', ()=>{

    it('Navegar a la primera pagina', ()=>{

        cy.visit('https://platzi.com/')

    })

    it('Recargar la pagina', ()=>{

        cy.reload()

    })

    it('Recargar la pagina de forma forzada', ()=>{

        cy.visit('https://google.com/')
        cy.reload(true) //recarga con la cache limpia

    })

    it('Navegar hacia atrás', ()=>{ //ejecuta solo este test

        cy.visit('https://google.com/')
        cy.visit('https://www.google.com/search?q=platzi&source=hp&ei=payzYsyBO-SUwbkPlZma4Ak&iflsig=AJiK0e8AAAAAYrO6tZWEoFuua_--DgNDhmGvV1w-ysW1&ved=0ahUKEwiM6J3pocL4AhVkSjABHZWMBpwQ4dUDCAc&uact=5&oq=platzi&gs_lcp=Cgdnd3Mtd2l6EAMyEQguEIAEELEDEIMBEMcBENEDMggIABCABBCxAzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgsIABCABBCxAxCDAToICAAQsQMQgwE6CwguEIAEELEDEIMBOgUILhCABDoRCC4QgAQQsQMQgwEQxwEQowI6EQguEIAEELEDEIMBEMcBEK8BOgsILhCABBDHARCvAToFCAAQsQM6DgguEIAEELEDEIMBENQCOgsILhCABBCxAxDUAlDwDFj_FWCnGWgBcAB4AIABuAKIAaMJkgEHMC4zLjIuMZgBAKABAbABAA&sclient=gws-wiz')
        cy.go('back') 
        //cy.go(-1) //otra forma de ir atrás

    })

    it.only('Navegar hacia adelante', ()=>{ //ejecuta solo este test

        cy.visit('https://google.com/')
        cy.visit('https://www.google.com/search?q=platzi&source=hp&ei=payzYsyBO-SUwbkPlZma4Ak&iflsig=AJiK0e8AAAAAYrO6tZWEoFuua_--DgNDhmGvV1w-ysW1&ved=0ahUKEwiM6J3pocL4AhVkSjABHZWMBpwQ4dUDCAc&uact=5&oq=platzi&gs_lcp=Cgdnd3Mtd2l6EAMyEQguEIAEELEDEIMBEMcBENEDMggIABCABBCxAzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgsIABCABBCxAxCDAToICAAQsQMQgwE6CwguEIAEELEDEIMBOgUILhCABDoRCC4QgAQQsQMQgwEQxwEQowI6EQguEIAEELEDEIMBEMcBEK8BOgsILhCABBDHARCvAToFCAAQsQM6DgguEIAEELEDEIMBENQCOgsILhCABBCxAxDUAlDwDFj_FWCnGWgBcAB4AIABuAKIAaMJkgEHMC4zLjIuMZgBAKABAbABAA&sclient=gws-wiz')
        cy.go('back') 
        cy.go('forward') 
        //cy.go(1) //otra forma de ir adelante

    })


})