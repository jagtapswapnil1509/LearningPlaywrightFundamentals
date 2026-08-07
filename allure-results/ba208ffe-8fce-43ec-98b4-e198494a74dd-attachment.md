# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 20_Page_Object_Model\306_POM.spec.ts >> POM with Login page >> Login with valid credenatils
- Location: tests\20_Page_Object_Model\306_POM.spec.ts:7:5

# Error details

```
Error: locator.fill: Test ended.
Call log:
  - waiting for getByTestId('username')

```

# Test source

```ts
  1  | import {Page , Locator, expect} from '@playwright/test'
  2  | 
  3  | export class LoginPage{
  4  | 
  5  |     //page locator 
  6  |     readonly page:Page;
  7  |     readonly emailinput:Locator;
  8  |     readonly passwordinput:Locator;
  9  |     readonly loginbutton:Locator;
  10 | 
  11 |     constructor(page:Page){
  12 |         this.page=page;
  13 |         this.emailinput= page.getByTestId("username");
  14 |         this.passwordinput = page.getByTestId("password");
  15 |         this.loginbutton = page.getByTestId("login-button");
  16 |     }
  17 | 
  18 |     //page actions
  19 | 
  20 |     async goto(){
  21 |         await this.page.goto("https://app.thetestingacademy.com/playwright/ttacart/");
  22 |     }
  23 | 
  24 |     async login(username:string,password:string){
> 25 |         this.emailinput.fill(username);
     |                         ^ Error: locator.fill: Test ended.
  26 |         this.passwordinput.fill(password);
  27 |         this.loginbutton.click();
  28 |     }
  29 | 
  30 | }
```