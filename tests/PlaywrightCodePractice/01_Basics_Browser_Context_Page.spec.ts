//Task 1.1 — Write a test that launches Chromium, 
// navigates to https://playwright.dev, and asserts the page title contains "Playwright".

import {test ,Browser, expect} from '@playwright/test';

test('validate page title', async({page})=>{
    await page.goto("https://playwright.dev");
    await page.waitForTimeout(3000);
    await expect(page).toHaveTitle(/Playwright/);
});

// Task 1.2 — Write a test that opens two independent browser contexts in the same test (simulate two different users), 
// navigate each to a different URL, and print both page titles to the console.

test('validate browser context', async({browser,page})=>{
    const context1 = await browser.newContext();
    const context2 = await browser.newContext();

    const page1 = await context1.newPage();
    const page2 = await context2.newPage();

    await page1.goto("https://playwright.dev/");
    await page2.goto("https://app.thetestingacademy.com/");

    console.log(await page1.title());
    console.log(await page2.title());

});