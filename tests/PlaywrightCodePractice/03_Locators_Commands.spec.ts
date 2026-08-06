import {test , expect} from '@playwright/test'

//Target: https://the-internet.herokuapp.com/login

//Task 3.1 — Locate the username field 3 different ways: by id, by getByRole, 
// and by CSS attribute selector. Fill each and 
// confirm the value with expect(locator).toHaveValue(...).

test('Task 3.1',async ({page})=>{
    await page.pause();
    await page.goto("https://the-internet.herokuapp.com/login");
    await page.locator("#username").fill("swapnil");
    await expect(page.locator("#username")).toHaveValue("swapnil");
    await page.getByRole('textbox',{name:"username"}).fill("jagtap");
    await expect(page.getByRole('textbox',{name:"username"})).toHaveValue("jagtap");
    await page.pause();
});