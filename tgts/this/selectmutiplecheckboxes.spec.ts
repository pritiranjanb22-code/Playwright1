import {test,expect} from '@playwright/test'


test('multiplecheckboxes',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    const checkBoxes = await page.$$('.form-check-label')
    for (let chec of checkBoxes){
        let che = await chec.textContent()
        console.log(che)
    

}
    const AllcheckBoxlocators = ['#sunday','#monday','#friday','#saturday']
    for (let checboxes of AllcheckBoxlocators){
        await page.locator(checboxes).check()
        await page.waitForTimeout(1000)
    }
    for (let checboxes of AllcheckBoxlocators){
    await page.locator(checboxes).uncheck()
    await page.waitForTimeout(1000)
    }
    
    })
    