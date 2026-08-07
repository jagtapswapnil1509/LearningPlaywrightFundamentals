import { test, expect } from '@playwright/test'
import { faker } from '@faker-js/faker'


const totalusercount = 5;
const emailDomains = ['gmail.com', 'yahoo.com', 'outlook.com', 'tta.dev', 'icloude.com'];

for (let i = 1; i <= totalusercount; i++) {
    test(`Register user # ${i} (${emailDomains[i - 1]})`, async ({ page }) => {

        const firstname = faker.person.firstName();
        const lastname = faker.person.lastName();
        const email = `${firstname.toLowerCase()}.${lastname.toLowerCase()}@${emailDomains[i - 1]}`;
        const password = faker.internet.password({ length: 20, memorable: true, pattern: /[A-Z]/, prefix: 'Auto ' });

        await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');
        //await page.getByRole('textbox', { name: 'First Name' }).fill(firstname);
        //await page.getByRole('textbox', { name: 'Last Name' }).fill(lastname);
        await page.getByRole('textbox', { name: 'Username' }).fill(email);
        await page.getByRole('textbox', { name: 'Password' }).first().fill(password);
        //await page.getByRole('button', { name: 'Save profile' }).click();
        //await expect(page.locator('#submission-output')).toContainText(email);
    });
}