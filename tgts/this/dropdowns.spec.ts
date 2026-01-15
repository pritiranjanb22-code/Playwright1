import {test, expect} from '@playwright/test'
import { count } from 'node:console'
import { stat } from 'node:fs'

test('dropdown',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#country').selectOption('Germany')
    await page.waitForTimeout(2000)
    await page.locator('#country').selectOption({index : 2})
    await page.locator('#country').selectOption({value : "uk"})
    await page.selectOption('#country','United States')
    let options = await page.locator("//select[@class='form-control' and @id='country']//option")
    let opt = await options.allTextContents()
    console.log(opt)
    console.log(opt[1].trim())
    await (expect(opt[1])).toContain('Canada')
    //await expect(opt.includes('Germany')).toBeTruthy()
    let status = false;
    console.log(typeof(opt))
    console.log(typeof(options))
    opt.includes('india')?true:false
    console.log(status)


    // await expect(options).toHaveCount(10)
    // let texts = await options.allTextContents()
    // texts.forEach(text => {console.log(text.trim())
        
    // });

    //await page.waitForTimeout(30000)

    // let Count = options.count();
    // for(let i=0;i<Count;i++){
    //     let opt = await options.nth(i).textContent()
    //     Count +=1
    //     console.log(`So the options are ${Count},${opt}`)

    // }


/*
const options = page.locator("//select[@id='country']/option");

await expect(options).toHaveCount(10);

const texts = await options.allTextContents();

texts.forEach(text => console.log(text.trim()));
*/



})