# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Practice\practice8.spec.ts >> SVG Task
- Location: tests\Practice\practice8.spec.ts:4:1

# Error details

```
Error: locator.innerText: Target page, context or browser has been closed
Call log:
  - waiting for locator('//div[@class=\'QiMO5r\']').nth(43)

```

# Test source

```ts
  1  | import { test, expect,Locator } from '@playwright/test'
  2  | import { count } from 'node:console';
  3  | 
  4  | test('SVG Task', async ({ page }) => {
  5  | 
  6  |     await page.goto("https://www.flipkart.com/search");
  7  |     await page.pause();
  8  |     await page.locator("input[name='q']").fill("macmini");
  9  |     const svgelement: Locator = page.locator('svg');
  10 |     await svgelement.first().click();
  11 |     const pricelocator:Locator = page.locator("//div[@class='QiMO5r']");
  12 |     let countnumber:number=await pricelocator.count();
  13 |     for(let i=0;i<countnumber;i++){
> 14 |         const priceofeachitem:string|null = await page.locator("//div[@class='QiMO5r']").nth(i).innerText();
     |                                                                                                 ^ Error: locator.innerText: Target page, context or browser has been closed
  15 |         console.log(priceofeachitem);
  16 |     }
  17 |     await page.pause();
  18 | });
```