import {test , expect} from '@playwright/test'
import {faker} from '@faker-js/faker'

function generateuser(){
    return{
        firstname:faker.person.firstName(),
        lastname:faker.person.lastName(),
        email:faker.internet.email(),
        telephone:faker.phone.number({style:'international'}),
        password:faker.internet.password()
    }
}
test(`Register single user via generateuser()`,async ({page})=>{

    const user = generateuser();
    await page.pause();
    await page.goto("https://app.thetestingacademy.com/playwright/tables/practice#page");
    await page.getByRole('textbox',{name:'First name'}).fill(user.firstname);
    await page.getByRole('textbox', { name: 'Last Name' }).fill(user.lastname);
    // await page.getByRole('textbox', { name: 'Email' }).fill(user.email);
    // await page.getByRole('textbox', { name: 'Password' }).first().fill(user.password);
    await page.getByRole('button', { name: 'Save profile' }).click();
    await expect(page.locator('#submission-output')).toContainText(user.firstname);
    await expect(page.locator('#submission-output')).toContainText(user.lastname);
    await page.pause();

}); 