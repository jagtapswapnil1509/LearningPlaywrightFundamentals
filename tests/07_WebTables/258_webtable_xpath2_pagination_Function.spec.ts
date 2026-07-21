import {test ,expect,Page, Locator} from '@playwright/test'

async function findRowByName(page:Page , name:string):Promise<Locator>{
    while(true){
        const row = page.locator("#employees-tbody tr").filter({hasText:name});
        if(await row.count()) return row;

        const next = page.getByTestId("next-page");
        if(await next.isDisabled()) throw new Error(`row not found:${name}`);
        await next.click();
    }

}

test('finding element in webpage',async ({page}) => {

    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");

    //finding one person email and country

    let name:string = "Hiroshi Tanaka";
    const row = await findRowByName(page,name);
    const email = await row.locator("td[data-col='email']").innerText();
    const country = await row.locator("td[data-col='country']").innerText();
    console.log(email,country);
    await page.waitForTimeout(5000);


    

});