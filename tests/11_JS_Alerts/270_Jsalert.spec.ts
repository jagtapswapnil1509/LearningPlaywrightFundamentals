import { test, expect, Locator } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
});

test('Javascript alert accept 1', async ({ page }) => {
    await page.pause();
    // Register the dialog handler BEFORE triggering the alert
    page.once('dialog', async dialog => {
        console.log("alert type", dialog.type());
        console.log("alert message", dialog.message());
        expect(dialog.message()).toBe("I am a JS Alert");
        await dialog.accept();
    });
    await page.getByText("Click for JS Alert", { exact: true }).click();
    await expect(page.locator("#result")).toHaveText("You successfully clicked an alert");
    await page.pause();
});

test('Javascript alert accept 12', async ({ page }) => {
    page.once('dialog',async dialog =>{
        await dialog.accept();
        //await dialog.dismiss();
    })
    await page.getByText("Click for JS Confirm", { exact: true }).click();

});

test('Javascript prompt accept 3', async ({ page }) => {
    await page.pause();
    const innertext = "swapnil";
    
    page.once('dialog',async dialog =>{
        await dialog.accept(innertext);
    })
    await page.locator('button', { hasText: 'Click for JS Prompt' }).click();
    await expect(page.locator('#result')).toHaveText(`You entered: ${innertext}`);
    await page.pause();
});