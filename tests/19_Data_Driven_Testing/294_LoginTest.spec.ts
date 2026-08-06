import {test , expect} from '@playwright/test';
import logindata from './test-data/login.json' with { type: 'json' };

test.describe('Login - data driven',()=>{

    test.beforeEach(async ({page})=>{
        await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    });

    test('login with valid username',async ({page})=>{
        await page.locator('#email').fill(logindata.validUser.email);
        await page.locator('#password').fill(logindata.validUser.password);
        await page.getByTestId("login-button").click();
    })

    test('login with invalid username',async ({page})=>{
        await page.locator('#email').fill(logindata.invalidUser.email);
        await page.locator('#password').fill(logindata.invalidUser.password);
        await page.getByTestId("login-button").click();
    })


});

