import{ test, expect} from '@playwright/test'

test('mytest1',async({page})=>{
    await page.goto('https://www.demoblaze.com/')
    await expect(page).toHaveTitle('STORE')
    const pageTitle = page.title()
    console.log(pageTitle)
    await page.locator('#login2').click()
    await console.log('logged in')
    await page.locator('#loginusername').fill('pavanol')
    await page.locator("//input[@id = 'loginpassword']").fill('test@123')
    await page.getByRole('button',{name : 'Log in'}).click()
    await expect(page.locator("//a[@class = 'hrefch' and text() = 'Samsung galaxy s6']")).toHaveText('Samsung galaxy s6')
    
    await page.waitForTimeout(2000)

    let pageeUrl = page.url()
    console.log(`here is your login page URL :${pageeUrl}`)
    


    // await page.locator('.card-title').nth(0).click()
    // await expect(page.locator('.name')).toHaveText('Samsung galaxy s6')
})
