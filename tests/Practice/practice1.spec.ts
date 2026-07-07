import { test, expect } from '@playwright/test';

test('open two context windows', async ({ browser }) => {
    const firstContext = await browser.newContext();
    const firstPage = await firstContext.newPage();

    const secondContext = await browser.newContext();
    const secondPage = await secondContext.newPage();
    await firstPage.goto("https://app.thetestingacademy.com/playwright/ttacart/");
    await secondPage.goto("https://tta-bank-digital-973242068062.us-west1.run.app/")


    await firstPage.close();
    await firstContext.close();
    await secondPage.close();
    await secondContext.close();
});
