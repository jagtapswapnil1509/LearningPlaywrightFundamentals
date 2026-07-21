import { test, expect } from '@playwright/test'

test('verify orange HRP Webtable', async ({ page }) => {

    await page.goto("https://awesomeqa.com/hr/web/index.php/auth/login");

    const username:string = "admin";
    const password:string = "Awesomeqa@4321";
    //login in to the website
    await page.getByRole('textbox',{name:"username"}).fill(username);
    await page.getByRole('textbox',{name:"password"}).fill(password);
    await page.getByRole('button',{name:"Login"}).click();

    await page.waitForTimeout(3000);

    // Webtable xpath - //div[@class="oxd-table-card"][1]/div[@role="row"]/div[@role='cell'][1]
    const firstpart = "//div[@class='oxd-table-card'][";
    const secondpart = "]/div[@role='row']/div[@role='cell'][";
    const thridpart = "]";
    const deletebutton = "]//button[.//i[contains(@class,'bi-trash')]]";
    const rowcount = await page.locator("//div[@class='oxd-table-card']").count();
    console.log(rowcount);
    const colmcount = await page.locator("//div[@class='oxd-table-card'][1]/div[@role='row']/div[@role='cell']").count();
    console.log(colmcount);
    for(let i=1;i<=rowcount;i++){
        for(let j=1;j<=colmcount;j++){
            const eachtext = await page.locator(`${firstpart}${i}${secondpart}${j}${thridpart}`).allInnerTexts();
            const row = await page.locator(`${firstpart}${i}${secondpart}${j}${thridpart}`);
            
            console.log(eachtext);
            if(eachtext.includes("Terminated")){
                console.log("text match");
                console.log("row=",row);
                await page.waitForTimeout(3000);
                await page.locator(`${firstpart}${i}${deletebutton}`).click();
                await page.waitForTimeout(3000);
            }
        }
    }
    

});