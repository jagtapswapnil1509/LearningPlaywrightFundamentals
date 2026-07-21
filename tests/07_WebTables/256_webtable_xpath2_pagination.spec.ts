import {test ,expect} from '@playwright/test'

test('finding element in webpage',async ({page}) => {

    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");

    //finding one person email and country

    let name:string = "abcd";
    let row;
    while(true){
        row = await page.locator("#employees-tbody tr").filter({hasText: name});
        if(await row.count()){
            break;
        }
        const next = await page.getByTestId("next-page");
        if(await next.isDisabled()) throw new Error("Row not found!");
        await next.click();
    }

    const email  = await row.locator("td[data-col='email']").innerText();
    const country  = await row.locator("td[data-col='country']").innerText();

    console.log(email , country);
    await page.waitForTimeout(5000);


    

});