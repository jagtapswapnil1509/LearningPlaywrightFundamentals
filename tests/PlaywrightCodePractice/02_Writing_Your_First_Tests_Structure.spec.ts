import {test , expect} from '@playwright/test'

test.describe('validate login tests',()=>{
    const URL = "https://the-internet.herokuapp.com/login";

    test.beforeEach('Login to URL before each test', async ({page})=>{
        await page.goto(URL);
    });
    test('valid login',async ({page})=>{
        await page.pause();
        await page.locator("#username").fill("tomsmith");
        await page.locator('#password').fill("SuperSecretPassword!");
        await page.getByRole('button',{name:'Login'}).click();
        await page.pause();
    });
    test('invalid login',async ({page})=>{
        await page.pause();
        await page.locator("#username").fill("tomsmith1");
        await page.locator('#password').fill("SuperSecretPassword!1");
        await page.getByRole('button',{name:'Login1'}).click();
        await page.pause();
    });



});
