import {test, expect} from '@playwright/test'

test('test four',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    let userText = await page.locator('div.orangehrm-login-error p:first-child').textContent();//page.locator('//div[contains(@class, "orangehrm-login-error")]').click();
    let Password1 = await page.locator("div[class='orangehrm-login-error'] p:nth-child(2)").textContent()
    //console.log(userText,Password1)

    function MainCred(me) {
        //console.log(me.split(" : ")[1])
        //return me.split(" : ")[1];
        return me.split(" : ")[1]
                        }
    let mainUs = MainCred(userText)
    let mainPass = MainCred(Password1)

    await page.getByPlaceholder('Username').fill(mainUs)
    await page.getByPlaceholder('Password').fill(mainPass)

    await page.getByRole('button', {type :'submit'}).click()
    await page.waitForTimeout(500)

    const name = page.locator('.oxd-userdropdown-name').filter({ hasText: 'John Doe' })
    await expect(name).toBeVisible()



    


    console.log(`Username: ${userText}, Password: ${Password1}`);

    await page.context().storageState({path :'saved_auth.json'})

    // await page.getByPlaceholder('Username').fill('')//page.locator(':has-text("Username : ")')
    // await page.getByPlaceholder('Password')
    
})