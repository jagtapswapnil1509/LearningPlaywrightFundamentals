import {test ,expect,Locator} from '@playwright/test'

test('Right click mouse',async ({page}) => {

    await page.goto("https://app.thetestingacademy.com/playwright/widgets/context-menu");
    await page.pause();
    await page.getByTestId("ctx-target").click({button:'right'});
    const allmenu:string[] = await page.locator("#ctx-menu").allInnerTexts();
    console.log(allmenu);
    for(let menu of allmenu){
        console.log(await page.locator("#ctx-menu").innerText());
    }
    await page.pause();

});