import {test ,expect} from '@playwright/test'

test('How to handle the multiple element',async ({page}) => {

    //Navigate to the page. 
    //find the locator which uses all the elements and text 
    //Loop through it, and we will find one which we need to click. 

    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");

    const rightpannellinktext:string[] = await page.locator("a.list-group-item").allInnerTexts();
    console.log("Lenght of pannel="+rightpannellinktext.length);

    for (const linktext of rightpannellinktext){
        if(linktext === "Forgotten Password"){
            await page.getByText(linktext).first().click();
        }
    }

    await page.waitForTimeout(5000);

     const rightpannellink = await page.locator("a.list-group-item").all();
    

    for (const link of rightpannellink){
       console.log(await link.getAttribute("href"));
    }

});