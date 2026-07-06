import {test ,expect} from '@playwright/test'

test('verify first TC',async ({page}) => {

    await page.goto("https://app.vwo.com/#/login");
    await expect(page).toHaveTitle("Login - Wingify");
    const logo_image = page.locator('#vow-login-logo');
    await expect(logo_image).toBeVisible();

});