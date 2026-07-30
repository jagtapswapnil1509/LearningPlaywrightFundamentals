import { test, expect, Locator } from '@playwright/test'

const Simplemap = "https://simplemaps.com/svg/country/in";

test.describe('SVG test', () => {

    test.beforeEach(' SVG URL', async ({ page }) => {
        await page.goto(Simplemap);
    });

    test('Advance SVG', async ({ page }) => {
        await page.pause();
        
        const states = await page.locator("//div[@id='admin1_map_inner']//*[name()='svg']//*[name()='path' and contains(@class,'sm_state')]").all();
        for(const state of states){

            const classstate = await state.getAttribute("class");
            console.log(classstate);
            if(classstate?.includes("INMH")){
                state.click();
            }
        }

        await page.pause();
    })

})