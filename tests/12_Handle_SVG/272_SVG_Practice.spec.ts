import { test, expect, Locator } from '@playwright/test'

const URL = "https://app.thetestingacademy.com/playwright/widgets/svg";

test.describe('SVG test', () => {

    test.beforeEach('SVG URL', async ({ page }) => {
        await page.goto(URL);
    });

    test('Locate SV', async ({ page }) => {
        await page.pause();
        const redcircle: Locator = await page.locator("#circle-red");
        await redcircle.click();
        const output = await page.locator("#shapes-output").innerText();
        await expect(output).toContain("Red");

        await page.getByTestId("bar-q3").click();
        const baroutput = await page.locator("#bars-output").innerText();
        await expect(baroutput).toContain("bar-q3");
        
        await page.getByTestId("star-3").click();

        let allbars = await page.locator(".bar").all();
        for(let bar of allbars){
            const q = await bar.getAttribute("data-quarter");
            console.log(q)
            const h = await bar.getAttribute("height");
            console.log(h)
        }

        await page.pause();
    })

})