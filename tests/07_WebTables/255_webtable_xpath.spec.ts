import {test ,expect} from '@playwright/test'

test('verify Element by filter',async ({page}) => {

    await page.goto("https://app.thetestingacademy.com/playwright/webtable");

    // xpath - //td[text()='Aarav.Sharma']/preceding-sibling::td/input[@type='checkbox']

    await page.locator("//td[text()='Aarav.Sharma']/preceding-sibling::td/input[@type='checkbox']").check();

    await page.locator("tr:has(td:text('Rohan.Mehta'))").locator("td").first().click();

    await page.waitForTimeout(4000);


});