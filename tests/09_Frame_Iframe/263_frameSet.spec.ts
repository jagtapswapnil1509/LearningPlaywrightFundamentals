import {test ,expect, FrameLocator,Locator} from '@playwright/test'

test('verify iframe',async ({page}) => {

    await page.goto("https://app.thetestingacademy.com/playwright/frames/multi-frames");
    await page.pause();
    let  mainframe:FrameLocator = await page.frameLocator("[name='main']");
    const mainheading = await mainframe.locator("h2").innerText();
    console.log(mainheading);    

    const allframes:Locator[] = await page.locator("//frame").all();
    console.log("Total no of frames:",+allframes.length);

    for(const frame of allframes){
        console.log(await frame.getAttribute("name"),":", await frame.getAttribute("src"));
    }
    let sideframe:FrameLocator = await page.frameLocator("[name='side']");
    await sideframe.getByText("Vehicle registration",{exact:true}).click();

    await page.pause();

});