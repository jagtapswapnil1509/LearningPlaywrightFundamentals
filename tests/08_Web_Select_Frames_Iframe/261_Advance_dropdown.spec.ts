import {test ,expect} from '@playwright/test'

test('Verify select from the custom dropdown',async ({page}) => {

    await page.goto("https://app.thetestingacademy.com/playwright/tables/select-boxes");

    // ① Single — searchable
    await page.getByTestId("rs-single").click();
    //await page.locator("#rs-single").click();
    await page.getByRole("option",{name:"Selenium"}).click();

    // ② Multi — chips with remove
    await page.getByTestId("rs-multi").click();
    await page.locator("//div[@data-value='JUnit']").click();
    await page.locator("//div[@data-value='TestNG']").click();
    await page.keyboard.press("Escape");

    //③ Creatable multi — type and Enter
    await page.getByTestId("rs-creatable-input").click();
    await page.getByText("performance",{exact:true}).click();
    await page.getByText("accessibility",{exact:true}).click();
    await page.keyboard.press("Escape");

    //④ Grouped — categorised options
    await page.locator("div[id='rs-grouped']").click();
    await page.locator("div[class='tta-rs__option']").filter({hasText:"Azure"}).click();
    await page.pause();    
    
    //⑤ Async — fetched on type
    await page.getByTestId("rs-async").click();
    await page.getByLabel("Search cities").fill("Pun");
    await expect(page.getByTestId("rs-async-menu")).toContainText("Pune");
    await page.getByRole("option",{name:"Pune"}).click();
    await page.pause();



});