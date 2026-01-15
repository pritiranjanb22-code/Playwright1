import {test, expect} from '@playwright/test'
import { setTimeout } from 'node:timers';

test('beforeall',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.waitForSelector('.form-check-label')
})

 test('test Name Five', async({page})=>{
    const namePlaceholder = page.locator("//input[@id = 'name']")
    const femaleCheckBox = page.locator("//input[@id = 'female' and @type='radio']")
    const malCheckbox = page.locator("//input[@id = 'male' and @type='radio']")

    await namePlaceholder.fill('Pritiranjan')
    await page.waitForTimeout(3000)
    await femaleCheckBox.check()
    await (expect(femaleCheckBox)).toBeChecked()

    await (expect(malCheckbox).not).toBeChecked()

    // checkbox
// test('checkbox',async({page})=>{
    // const checkBoxes = await page.$$('.form-check-label')
    // for (let chck of checkBoxes){
    //     console.log(chck)
    // }
})
    




    //check boxes


    



//  });