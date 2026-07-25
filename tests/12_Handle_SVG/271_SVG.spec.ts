import {test , expect , Locator} from '@playwright/test'

const URL = "https://www.flipkart.com/search";

test.describe("flipkart search via SVG",()=>{

    test.beforeEach(async ({page})=>{
        await page.goto(URL);
    })

    test("TC#1 @smoke @regression",async({page})=>{
        await page.pause();
        await page.locator("input[name='q']").fill("macmini");
        const svgelement :Locator = page.locator('svg');
        await svgelement.first().click();

        ////div[contains(@data-id,'CPU') or contains(@data-id,'ACC') or contains(@data-id,'COM') or contains(@data-id,'MP')]/div/a[2]

        const titleResults: Locator = page.locator("//div[contains(@data-id,'CPU') or contains(@data-id,'ACC') or contains(@data-id,'COM') or contains(@data-id,'MP')]/div/a[2]");

        const count: number = await titleResults.count();
        for (let i = 0; i < count; i++) {
            const title: string | null = await titleResults.nth(i).textContent();
            console.log(title);
        }

        await page.pause();
    });

})