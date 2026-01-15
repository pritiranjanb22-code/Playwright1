import {test , expect} from '@playwright/test'

test('mytest2',async({page})=>{
    await page.goto('https://www.demoblaze.com/index.html');
    console.log(page.title())
    await expect(page).toHaveTitle('STORE')
    await page.locator('#login2').click()
    await page.locator("//input[@id='loginusername']").fill('pavanol')
    await page.fill("//input[@id='loginpassword']",'test@123')
    await page.getByRole('button',{name : 'Log in'}).click()
    await page.waitForTimeout(4000)
})