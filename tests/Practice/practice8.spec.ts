import { test, expect, Locator } from '@playwright/test'

test('SVG Task', async ({ page }) => {

    await page.goto("https://www.flipkart.com/search");
    await page.pause();
    await page.locator("input[name='q']").fill("macmini");
    const svgelement: Locator = page.locator('svg');
    await svgelement.first().click();
    const pricelocator: Locator = page.locator("//div[@class='hZ3P6w']");
    let countnumber: number = await pricelocator.count();
    const numberprice: number[] = [];
    for (let i = 0; i < countnumber; i++) {
        const priceofeachitem: string | null = await pricelocator.nth(i).textContent();
        if (priceofeachitem === "Price: Not Available") {
            continue;
        }
        if (priceofeachitem) {
            const cleaned = priceofeachitem.replace(/[₹,]/g, '').trim();
            console.log(cleaned);
            const num = parseInt(cleaned, 10);
            if (!isNaN(num)) {
                numberprice.push(num);
            }
        }

    }
    //sort ascending
    numberprice.sort((a, b) => a - b);
    console.log("Lowest price:", numberprice[0]);
    await page.pause();
});