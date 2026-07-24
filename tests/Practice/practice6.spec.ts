import { test, expect } from '@playwright/test'

test('verify Drop down selection', async ({ page }) => {

    await page.goto("https://www.spicejet.com/");
    await page.getByTestId("to-testID-origin").click();
    await page.getByTestId("to-testID-origin").getByRole("textbox").fill("De");
    await page.locator("//div[@class='css-1dbjc4n r-19yat4t r-1rt2jqs']").filter({hasText:"Delhi"}).click();
    await page.getByTestId("to-testID-destination").click();
    await page.getByTestId("to-testID-destination").getByRole("textbox").fill("Ban");
    await page.getByText("Bengaluru",{exact:true}).click();
});