# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 16_Scroll_toElement\278_ScrolltoView.spec.ts >> Test to scroll into the page >> Scroll into page
- Location: tests\16_Scroll_toElement\278_ScrolltoView.spec.ts:10:5

# Error details

```
Error: locator.scrollIntoViewIfNeeded: Target page, context or browser has been closed
Call log:
  - waiting for locator('deep-anchor')

```

# Test source

```ts
  1  | import {test , expect} from '@playwright/test'
  2  | 
  3  | test.describe('Test to scroll into the page',()=>{
  4  | 
  5  |     test.beforeEach('navigate to URL',async ({page})=>{
  6  | 
  7  |         await page.goto("https://app.thetestingacademy.com/playwright/widgets/scroll");
  8  |     });
  9  | 
  10 |     test('Scroll into page',async ({page})=>{
  11 |         await page.pause();
  12 | 
  13 |          // 1) scrollIntoViewIfNeeded — Playwright does the scroll for you
> 14 |         await page.locator("#deep-anchor").scrollIntoViewIfNeeded();
     |                                           ^ Error: locator.scrollIntoViewIfNeeded: Target page, context or browser has been closed
  15 |         await page.locator("#deep-anchor").click();
  16 | 
  17 |         await page.pause();
  18 | 
  19 |     });
  20 | 
  21 | 
  22 | 
  23 | });
```