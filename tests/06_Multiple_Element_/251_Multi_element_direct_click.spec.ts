import {test ,expect} from '@playwright/test'

test('How to handle the multiple element and click on direct element',async ({page}) => {

    //Navigate to the page. 
    //find the locator which uses all the elements and text 
    //Loop through it, and we will find one which we need to click. 

    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");

    // getbyrole and getbytext is not unique
    await page.getByTestId("forgotten-password-link").click();

    await page.waitForTimeout(5000);

    
    


});