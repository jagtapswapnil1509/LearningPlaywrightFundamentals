import {test , expect} from '@playwright/test'
import {faker} from '@faker-js/faker'

test.describe('faker js data driven test case',()=>{

    test('should disaply the expected generated data',async ({page})=>{

        await page.goto("https://app.thetestingacademy.com/playwright/ttacart/");

        // dynamic data
        const expect_firstname = faker.person.firstName();
        const expect_email = faker.internet.email();
        const expect_password = faker.internet.password();
        console.log(expect_firstname);
        console.log(expect_email);
        console.log(expect_password);

        const telephone = faker.phone.number({style:'national'});
        const password = faker.internet.password({length:20,memorable:true,pattern:/[A-Z]/,prefix:'Auto'});
        console.log(telephone);
        console.log(password);

        const testuser ={
            name:expect_firstname,
            email:expect_email,
            password:expect_password
        };
        await page.pause();
        await page.getByRole('textbox',{name:'username'}).fill(testuser.email);
        await page.getByRole('textbox',{name:'password'}).fill(testuser.password);
        await page.getByRole('button',{name:'Login'}).click();
        await page.pause();
    });



});