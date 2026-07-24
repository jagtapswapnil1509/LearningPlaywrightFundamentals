# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Practice\practice6.spec.ts >> verify Drop down selection
- Location: tests\Practice\practice6.spec.ts:3:1

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('//div[@class=\'css-1dbjc4n r-19yat4t r-1rt2jqs\']').filter({ hasText: 'Bengaluru' }).first()

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'
  2  | 
  3  | test('verify Drop down selection', async ({ page }) => {
  4  | 
  5  |     await page.goto("https://www.spicejet.com/");
  6  |     await page.pause();
  7  |     await page.getByTestId("to-testID-origin").click();
  8  |     await page.getByTestId("to-testID-origin").getByRole("textbox").fill("De");
  9  |     await page.locator("//div[@class='css-1dbjc4n r-19yat4t r-1rt2jqs']").filter({hasText:"Delhi"}).click();
  10 |     await page.getByTestId("to-testID-destination").click();
  11 |     await page.getByTestId("to-testID-destination").getByRole("textbox").fill("Ben");
> 12 |     await page.locator("//div[@class='css-1dbjc4n r-19yat4t r-1rt2jqs']").filter({hasText:"Bengaluru"}).first().click();
     |                                                                                                                 ^ Error: locator.click: Target page, context or browser has been closed
  13 |     await page.pause();
  14 | 
  15 | });
```