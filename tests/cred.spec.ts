import { test, expect } from '@playwright/test';



test.skip('login and save auth', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { type: 'submit' }).click();

  await expect(page.locator('.oxd-userdropdown-name')).toBeVisible();

  // ✅ THIS creates the file
  await page.context().storageState({ path: 'saved_auth.json' });
});
