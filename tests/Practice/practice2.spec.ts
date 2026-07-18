import { test, expect } from '@playwright/test'

test('verify student login and validate the email id and password in URL', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");

    const emailid: string = "jagtap.swapnil@gmail.com";
    const password: string = "12345";
    await page.pause();
    await page.getByRole("textbox", { name: "email" }).fill(emailid);
    await page.getByRole("textbox", { name: "password" }).fill(password);
    await page.waitForTimeout(2000);
    await page.getByRole("checkbox", { name: "remember" }).check();
    await page.waitForTimeout(2000);
    await page.getByTestId("login-button").click();
    const pageurl: string = decodeURIComponent(await page.url());
    console.log(pageurl);
    await expect(pageurl).toContain(emailid);
    console.log("Email id validated");
    await expect(pageurl).toContain(password);
    console.log("Password validated");
    await page.waitForTimeout(5000);


});