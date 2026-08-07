# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 19_Data_Driven_Testing\303_DDT_FakerJsAdvance.spec.ts >> Register single user via generateuser()
- Location: tests\19_Data_Driven_Testing\303_DDT_FakerJsAdvance.spec.ts:13:1

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('textbox', { name: 'firstName' })

```

# Test source

```ts
  1  | import {test , expect} from '@playwright/test'
  2  | import {faker} from '@faker-js/faker'
  3  | 
  4  | function generateuser(){
  5  |     return{
  6  |         firstname:faker.person.firstName(),
  7  |         lastname:faker.person.lastName(),
  8  |         email:faker.internet.email(),
  9  |         telephone:faker.phone.number({style:'international'}),
  10 |         password:faker.internet.password()
  11 |     }
  12 | }
  13 | test(`Register single user via generateuser()`,async ({page})=>{
  14 | 
  15 |     const user = generateuser();
  16 |     await page.pause();
  17 |     await page.goto("https://app.thetestingacademy.com/playwright/tables/practice#page");
> 18 |     await page.getByRole('textbox',{name:'First name'}).fill(user.firstname);
     |                                                        ^ Error: locator.fill: Target page, context or browser has been closed
  19 |     await page.getByRole('textbox', { name: 'Last Name' }).fill(user.lastname);
  20 |     // await page.getByRole('textbox', { name: 'Email' }).fill(user.email);
  21 |     // await page.getByRole('textbox', { name: 'Password' }).first().fill(user.password);
  22 |     await page.getByRole('button', { name: 'Save profile' }).click();
  23 |     await expect(page.locator('#submission-output')).toContainText(user.firstname);
  24 |     await expect(page.locator('#submission-output')).toContainText(user.lastname);
  25 |     await page.pause();
  26 | 
  27 | }); 
```