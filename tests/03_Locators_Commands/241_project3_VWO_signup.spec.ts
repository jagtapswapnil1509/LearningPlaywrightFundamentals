import {test , expect} from '@playwright/test'

test('Verify the page has an error when we entre the incorrect email id',async ({page})=>{

    await page.goto("https://vwo.com/free-trial/");
    await page.locator("#page-v1-step1-email").fill("abcd");
    await page.locator("#page-free-trial-step1-cu-gdpr-consent-checkbox").click();
    await page.locator("[data-qa='page-free-trial-step1-gdpr-consent-checkbox']").click();

    let error_msg = await page.locator("//div[contains(@class,'invalid-reason')]").first().textContent();

    expect(error_msg).toContain("The email address you entered is incorrect.");



});