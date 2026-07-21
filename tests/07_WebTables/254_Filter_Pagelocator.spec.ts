import {test ,expect} from '@playwright/test'

test('verify Element by filter',async ({page}) => {

    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");

    const forgotpasswordlink =await page.locator("a.list-group-item").filter({ hasText :'Forgotten Password'});
    //alternate way for filter
    //const forgotpasswordlink =await page.locator("a.list-group-item").filter({ hasText :'/^Forgotten/'});
    await forgotpasswordlink.click();
    await page.waitForTimeout(2000);

    const accountlinks = await page.locator("a.list-group-item");
    await expect(accountlinks).toHaveCount(13);

    const privacylink = await page.locator("footer a").filter({ hasText : 'Privacy Policy'});
    await expect(privacylink).toHaveAttribute('href','#privacy-policy');
    await privacylink.click();

});