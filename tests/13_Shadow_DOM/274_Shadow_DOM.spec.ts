import { test, expect, Locator } from '@playwright/test'

const Simplemap = "https://app.thetestingacademy.com/playwright/widgets/shadow-dom";

test.describe('Shadow Dom', () => {

    test.beforeEach(' Shadow Dom URL', async ({ page }) => {
        await page.goto(Simplemap);
    });

    test('Shadow dom', async ({ page }) => {
        await page.pause();
        
        const cart = await page.getByTestId("card-account");
        await cart.locator("input[name='email']").fill("ss@gmail.com");
        await cart.locator("input[name='password']").fill("abcd");
        await cart.getByTestId("card-account-submit").click();       
        await expect(await page.getByTestId("card-account-status")).toContainText("ss@gmail.com")

        const cart2 = page.getByTestId('counter-cart');
        await cart2.getByRole('button', { name: 'Increment' }).click();
        await cart2.getByRole('button', { name: 'Increment' }).click();
        await expect(cart2.getByTestId('counter-value')).toHaveText('5');

        await page.getByTestId('nested-host');
        await page.getByTestId('card-inside-email').fill('pramod@thetestingacdemy.com');
        await page.getByTestId('card-inside-password').fill('pramod@123');
        await page.getByTestId('card-inside-submit').click();



        await page.pause();
    })

})