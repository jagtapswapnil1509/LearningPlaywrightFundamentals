import {test , expect} from '@playwright/test'

test('verify the title',async ({ page })=>{  // page is called and fixture , 
// fixture mean by injected by playwright

    await page.goto("https://app.vwo.com");
    await expect(page).toHaveTitle("Login - Wingify");

})