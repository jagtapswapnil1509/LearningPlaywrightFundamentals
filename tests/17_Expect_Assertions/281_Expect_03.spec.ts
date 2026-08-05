import { test, expect } from '@playwright/test'

test('3 soft assertion', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/tables/practice.html");
    await page.pause();
    let firstname = await page.getByPlaceholder('Aarav');

    // Soft : Each line records its own failure. test continue either way. 
    await expect.soft(firstname).toHaveAttribute('id', 'first-name');
    await expect.soft(firstname).toBeVisible();
    await expect.soft(firstname).toHaveValue('');

    // Hard
    // Final hard assertion still runs after the soft block.
    await expect(firstname).toBeEnabled();
    // this line will not be executed if the above line is fails)
    await page.goto('https://app.thetestingacademy.com/playwright/webtable.html');
    await expect(page.locator('#error')).not.toBeVisible();

    let title = await page.title();
    expect(title).not.toContain('error');



    await page.pause();

});