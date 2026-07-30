# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 14_FileUpload\275_File_Upload.spec.ts >> File upload >> Shadow dom
- Location: tests\14_FileUpload\275_File_Upload.spec.ts:12:5

# Error details

```
ReferenceError: __dirname is not defined
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e4]:
    - link "Fork me on GitHub":
      - /url: https://github.com/tourdedave/the-internet
      - img "Fork me on GitHub" [ref=e5] [cursor=pointer]
    - generic [ref=e7]:
      - heading "File Uploader" [level=3] [ref=e8]
      - paragraph [ref=e9]: Choose a file on your system and then click upload. Or, drag and drop a file into the area below.
      - generic [ref=e10]:
        - button "Choose File" [ref=e11]
        - button "Upload" [ref=e12] [cursor=pointer]
  - generic [ref=e15]:
    - separator [ref=e16]
    - generic [ref=e17]:
      - text: Powered by
      - link "Elemental Selenium" [ref=e18] [cursor=pointer]:
        - /url: http://elementalselenium.com/
```

# Test source

```ts
  1  | import { test, expect, Locator } from '@playwright/test'
  2  | import path from 'path';
  3  | 
  4  | const Simplemap = "https://the-internet.herokuapp.com/upload";
  5  | 
  6  | test.describe('File upload', () => {
  7  | 
  8  |     test.beforeEach(' File upload URL', async ({ page }) => {
  9  |         await page.goto(Simplemap);
  10 |     });
  11 | 
  12 |     test('Shadow dom', async ({ page }) => {
  13 |         await page.pause();
  14 | 
> 15 |         const filepath = path.join(__dirname,'testdata.txt');
     |                                    ^ ReferenceError: __dirname is not defined
  16 |         console.log("filepath:",filepath);
  17 | 
  18 |         await page.setInputFiles("#file-upload",filepath);
  19 |         await page.click('#file-submit');
  20 | 
  21 |         await expect(page.locator('h3')).toHaveText('File Uploaded!');
  22 |         await expect(page.locator('#uploaded-files')).toHaveText('testdata.txt');
  23 | 
  24 |         await page.pause();
  25 |     })
  26 | 
  27 | })
```