import {test, expect} from '@playwright/test'

test('checkbox extraction',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.waitForSelector('.form-check-label')
    const checkBoxes = await page.$$('.form-check-label')
    for (let chec of checkBoxes){
        let che = await chec.textContent()
        console.log(che)
    }

    const radio = await page.locator('#male')
    const radio1 = await page.locator('#female')

    await radio.check()
    await expect(radio).toBeChecked()
    if(await radio.isChecked()){
        console.log('1st element is checked')}

    await radio1.check()
    await expect(radio).not.toBeChecked()

    if(radio){
        console.log('checked')
    }else{
        console.log('unchecked')
    }
    await page.waitForTimeout(5000)
})