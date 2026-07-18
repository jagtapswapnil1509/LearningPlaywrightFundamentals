import { test, expect } from '@playwright/test'

test('Webtable login structed ', async ({ page }) => {
    // First of all, go to the link of the web table, 
    // find the correct Helen banquet, 
    // and then use a for loop to find the following simple 
    await page.goto("https://awesomeqa.com/webtable1.html");

    const row = await page.locator("table[summary='Sample Table'] tbody tr");
    console.log(row);
    const rowcount = await row.count();
    console.log(rowcount);

    for(let i =0;i<=rowcount;i++){
        const rowlocator = await row.nth(i).locator('td');
        const rowdata = await row.nth(i).locator('td').allInnerTexts();
        console.log(`Row $(i+1):`,rowdata);

    }


});