import {test, expect} from '@playwright/test'
import { waitForDebugger } from 'node:inspector'

test('mytest',async({page})=>{
    await page.goto('https://www.demoblaze.com/index.html')
    await page.$$('.hrefch')
    //await page.waitForSelector('//a')
    //await page.waitForLoadState('networkidle')
    await page.waitForTimeout(1000)
    await page.$$('//a')
    const links = await page.$$('//a')
    
    const prod = await page.$$('.hrefch')
    await console.log("+++products+++")


    for (const pro of prod ){
        const pr = await pro.textContent()
        console.log(pr)
    }
    await console.log("+++links+++")
    for (const link of links){
        let lin = await link.textContent()
        console.log(lin?.trim())
        /*
        
What console.log(lin?.trim()) does:
Optional chaining (?.):

If lin is null or undefined, returns undefined instead of throwing an error

If lin has a value, continues to call .trim()

Trim():

Removes whitespace from both ends of the string

Returns undefined if lin is null/undefined due to optional chaining

        */

    }
    
})



