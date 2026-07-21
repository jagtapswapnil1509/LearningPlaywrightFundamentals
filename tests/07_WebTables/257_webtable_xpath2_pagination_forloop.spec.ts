import { test, expect } from '@playwright/test'

test('finding element in webpage', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");

    //finding one person email and country

    const pagecount = 3;
    const allEmails: string[] = [];
    for (let p = 1; p <= pagecount; p++) {
        await page.getByTestId(`page-${p}`).click();
        const emails = await page.locator("#employees-tbody tr td[data-col='email']").allInnerTexts();
        allEmails.push(...emails);
    }


    console.log(allEmails);
    await page.waitForTimeout(5000);




});