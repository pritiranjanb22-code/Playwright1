import { test, expect } from '@playwright/test';

test('dashboard test', async ({ page }) => {
  await page.goto(
    'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index'
  );
  await expect(page.locator('.oxd-userdropdown-name')).toBeVisible();
});
