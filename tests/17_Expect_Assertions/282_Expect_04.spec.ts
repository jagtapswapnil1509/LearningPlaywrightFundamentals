import { test, expect } from '@playwright/test'

test('visible , enable , disable , checked', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/tables/practice.html");
    await page.pause();
    
    
    const automationcheckbox = await page.getByRole('checkbox',{name:/UFT/});
    //await automationcheckbox.check();
    await expect(automationcheckbox).not.toBeChecked();

    const submitbutton = await page.locator("#profile-submit");
    await expect(submitbutton).toBeEnabled();
    await expect(submitbutton).toBeVisible();

    await expect(page).toHaveTitle(/QA Profile/);

    const appURL = await page.url();
    await expect(appURL).toContain("thetestingacademy");




    await page.pause();

});