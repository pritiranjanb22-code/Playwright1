import {test, expect} from '@playwright/test'

test.only('checkbox extraction',async({page})=>{
    
    await page.goto('https://www.demoblaze.com/index.html');
    // await page.goto('https://www.demoblaze.com/cart.html');
    console.log(await page.title())
    await expect(page).toHaveTitle('STORE')
    await page.locator('#login2').click()
    await page.locator("//input[@id='loginusername']").fill('pavanol')
    await page.fill("//input[@id='loginpassword']",'test@123')
    await page.getByRole('button',{name : 'Log in'}).click()
    await expect(page).toHaveTitle('STOREE')
    await page.context().storageState({path :'saved_auth.json'})
    await page.waitForTimeout(4000)
})
