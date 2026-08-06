# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 17_Expect_Assertions\282_Expect_04.spec.ts >> visible , enable , disable , checked
- Location: tests\17_Expect_Assertions\282_Expect_04.spec.ts:3:1

# Error details

```
Error: expect(locator).not.toBeChecked() failed

Locator:  getByRole('checkbox', { name: /UFT/ })
Expected: not checked
Received: checked
Timeout:  5000ms

Call log:
  - Expect "not toBeChecked" with timeout 5000ms
  - waiting for getByRole('checkbox', { name: /UFT/ })
    13 × locator resolved to <input value="UFT" name="tools" type="checkbox" data-testid="tool-uft"/>
       - unexpected value "checked"

```

```yaml
- checkbox "UFT" [checked]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'
  2  | 
  3  | test('visible , enable , disable , checked', async ({ page }) => {
  4  | 
  5  |     await page.goto("https://app.thetestingacademy.com/playwright/tables/practice.html");
  6  |     await page.pause();
  7  |     
  8  |     
  9  |     const automationcheckbox = await page.getByRole('checkbox',{name:/UFT/});
  10 |     await automationcheckbox.check();
> 11 |     await expect(automationcheckbox).not.toBeChecked();
     |                                          ^ Error: expect(locator).not.toBeChecked() failed
  12 | 
  13 |     const submitbutton = await page.locator("#profile-submit");
  14 |     await expect(submitbutton).toBeEnabled();
  15 |     await expect(submitbutton).toBeVisible();
  16 | 
  17 |     await expect(page).toHaveTitle(/QA Profile/);
  18 | 
  19 |     const appURL = await page.url();
  20 |     await expect(appURL).toContain("testtestingacademy");
  21 | 
  22 | 
  23 | 
  24 | 
  25 |     await page.pause();
  26 | 
  27 | });
```