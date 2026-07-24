import {test ,expect} from '@playwright/test'

test('Verify select from the custom dropdown',async ({page}) => {

    await page.goto("https://app.thetestingacademy.com/playwright/tables/dropdowns");

    await page.getByTestId("lang-trigger").click();
    //await page.locator("//div[@role='listbox']",{hasText:"TypeScript"}).click();
    //await page.getByText("TypeScript").click();
    await page.getByRole("option",{name:"TypeScript"}).click();
    
    

    await page.getByTestId("framework-trigger").click();
    await page.locator("//div[@class='select-option']",{hasText:"Next.js"}).click();


    await page.locator("#experience-trigger").click();
    await page.getByRole("option",{name:"Mid-level (4-6 years)",exact:true}).click();
    await page.pause();

});