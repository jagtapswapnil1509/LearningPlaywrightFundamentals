# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 09_Frame_Iframe\264_Iframe_part2.spec.ts >> verify iframe
- Location: tests\09_Frame_Iframe\264_Iframe_part2.spec.ts:3:1

# Error details

```
Error: locator.innerText: Target page, context or browser has been closed
Call log:
  - waiting for locator('#pact1').first().contentFrame().locator('#pact2').contentFrame().locator('h3')

```

# Test source

```ts
  1  | import {test ,expect, FrameLocator} from '@playwright/test'
  2  | 
  3  | test('verify iframe',async ({page}) => {
  4  | 
  5  |     await page.goto("https://selectorshub.com/iframe-scenario/");
  6  |     await page.pause();
  7  |     let frame1:FrameLocator = await page.frameLocator("#pact1").first();
  8  |     let frame2:FrameLocator=await frame1.frameLocator("#pact2");
  9  | 
  10 |     await frame1.locator("#inp_val").fill("abcd");
  11 |     await frame2.locator("#jex").fill("efdg");
  12 | 
> 13 |     let frame2header = await frame2.locator("h3").innerText();
     |                                                   ^ Error: locator.innerText: Target page, context or browser has been closed
  14 |     console.log(frame2header);
  15 |     await page.pause();
  16 | 
  17 | });
```