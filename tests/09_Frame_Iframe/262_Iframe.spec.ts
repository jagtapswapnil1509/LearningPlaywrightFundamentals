import {test ,expect, FrameLocator} from '@playwright/test'

test('verify iframe',async ({page}) => {

    await page.goto("https://app.thetestingacademy.com/playwright/frames/");
    await page.pause();
    let Vehiclevalue:FrameLocator = await page.frameLocator("#frame-one");
    await Vehiclevalue.locator("#RESULT_TextField-1").fill("Nexon");
    await Vehiclevalue.locator("#RESULT_TextField-2").fill("Swapnil");
    await Vehiclevalue.locator("#RESULT_RadioButton-1").selectOption("SUV");
    await Vehiclevalue.getByText("Submit registration",{exact:true}).click();

    let output = await Vehiclevalue.locator("#vehicle-output").innerText();
    console.log(output);
    await page.pause();

});