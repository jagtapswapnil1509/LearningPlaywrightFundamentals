import {test , expect} from '@playwright/test'

test('Verify the page has an error when we entre the incorrect email id',async ({page})=>{

    await page.goto("https://vwo.com/free-trial/");
    await page.getByRole('textbox',{name:'email'}).fill("abccd");

    await page.getByRole('checkbox').check();

    await page.getByRole('button',{name:'Create a Free Trial Account'}).click();

    let error_msg = await page.locator("//div[contains(@class,'invalid-reason')]").first().textContent();

    expect(error_msg).toContain("The email address you entered is incorrect.");

    await page.waitForTimeout(10000);


});