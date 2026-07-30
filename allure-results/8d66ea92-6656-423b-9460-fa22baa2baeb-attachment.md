# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 15_File_Download\277_File_Download.spec.ts >> download file tests >> download file
- Location: tests\15_File_Download\277_File_Download.spec.ts:12:5

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "", waiting until "load"

```

# Test source

```ts
  1  | import { test , expect} from '@playwright/test';
  2  | import path from 'path';
  3  | 
  4  | test.describe('download file tests',()=>{
  5  | 
  6  |     test.beforeEach('go to URL',async ({page})=>{
  7  | 
> 8  |         await page.goto("");
     |                    ^ Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
  9  | 
  10 |     });
  11 | 
  12 |     test('download file',async ({page})=>{
  13 | 
  14 |         await page.pause();
  15 |         //if event happen we need to capture , similar to JS alert
  16 | 
  17 |         const [staticdownload] = await Promise.all([
  18 | 
  19 |             page.waitForEvent('download'),
  20 |             page.locator("#dl-static").click()
  21 |         ]);
  22 | 
  23 |         const filepath = path.join('output',staticdownload.suggestedFilename());
  24 |         await staticdownload.saveAs(filepath);
  25 | 
  26 | 
  27 |         await page.pause();
  28 | 
  29 |     });
  30 | 
  31 | });
  32 | 
  33 | 
  34 | 
```