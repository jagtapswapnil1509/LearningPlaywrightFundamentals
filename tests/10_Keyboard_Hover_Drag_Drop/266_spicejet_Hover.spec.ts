import {test ,expect} from '@playwright/test'

test('Hover',async ({page}) => {

    await page.goto("https://www.spicejet.com/");
    await page.pause();
    await page.getByText("Add-ons",{exact:true}).hover();
    await page.getByText("Indian Armed Forces Personnel",{exact:true}).click();
    await page.pause();

});