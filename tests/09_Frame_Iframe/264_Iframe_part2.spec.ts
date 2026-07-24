import {test ,expect, FrameLocator} from '@playwright/test'

test('verify iframe',async ({page}) => {

    await page.goto("https://selectorshub.com/iframe-scenario/");
    await page.pause();
    let frame1:FrameLocator = await page.frameLocator("#pact1").first();
    let frame2:FrameLocator=await frame1.frameLocator("#pact2");

    await frame1.locator("#inp_val").fill("abcd");
    await frame2.locator("#jex").fill("efdg");

    let frame1header = await frame1.locator('h3').innerText()
    console.log(frame1header);
    await page.pause();

});