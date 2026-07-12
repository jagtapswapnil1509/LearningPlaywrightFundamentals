
import {test , expect} from '@playwright/test'

test('TC#01-Verify that app.vwo.com login is not working', async ({page}) => {

     // Defalt Locators
    //  id, name, className, Tag., Custom Locator (Via CSS selector)

    // Css Seclector ->  Browser - Css Engine, Help you to find the element
    // by using the default locators
    // id => #id
    // className => .
    // name => [name="value"]
    // Tag => [tag]

    // <input 
    // type="email" 
    // class="text-input W(100%)" 
    // name="username" 
    // vwo-html-translate-attr="placeholder" 
    // vwo-html-translate-placeholder="login:enterEmailID" 
    // id="login-username" 
    // data-qa="hocewoqisi" 
    // placeholder="Enter email ID" 
    // data-gtm-form-interact-field-id="0"
    // >

    await page.goto("https://app.vwo.com/#/login");

    let username = page.locator('#login-username');
    let password = page.locator('#login-password');
    let signinbutton = page.locator('#js-login-btn');

    await username.fill("abc@gmail.com");
    await password.fill("tstsss");
    await signinbutton.click();

    let errormsg = page.locator('#js-notification-box-msg');

    await expect(errormsg).toContainText("Your email, password, IP address or location did not match");


});
