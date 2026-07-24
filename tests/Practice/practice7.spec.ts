import { test, expect } from '@playwright/test'

test('Hover', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/widgets/hover-menu");
    await page.getByTestId("nav-add-ons").hover();
    let allmenu = await page.getByLabel("Add-ons submenu",{exact:true}).all();
    for(let i=0;i<=allmenu.length;i++){
        console.log("each menu=",await page.getByLabel("Add-ons submenu").innerText());
    }
    await page.getByTestId("test-id-Wifi").click();
});