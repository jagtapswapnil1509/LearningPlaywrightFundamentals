# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 13_Shadow_DOM\274_Shadow_DOM.spec.ts >> Shadow Dom >> Shadow dom
- Location: tests\13_Shadow_DOM\274_Shadow_DOM.spec.ts:11:5

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for getByTestId('card-account').locator('//input[@name=\'email\']')

```

# Test source

```ts
  1  | import { test, expect, Locator } from '@playwright/test'
  2  | 
  3  | const Simplemap = "https://app.thetestingacademy.com/playwright/widgets/shadow-dom";
  4  | 
  5  | test.describe('Shadow Dom', () => {
  6  | 
  7  |     test.beforeEach(' Shadow Dom URL', async ({ page }) => {
  8  |         await page.goto(Simplemap);
  9  |     });
  10 | 
  11 |     test('Shadow dom', async ({ page }) => {
  12 |         await page.pause();
  13 |         
  14 |         const cart = await page.getByTestId("card-account");
> 15 |         await cart.locator("//input[@name='email']").fill("ss@gmail.com");
     |                                                      ^ Error: locator.fill: Target page, context or browser has been closed
  16 |         await cart.locator("//input[@name='password']").fill("abcd");
  17 |         await cart.getByTestId("card-account-submit").click();
  18 | 
  19 | 
  20 | 
  21 | 
  22 | 
  23 |         await page.pause();
  24 |     })
  25 | 
  26 | })
```