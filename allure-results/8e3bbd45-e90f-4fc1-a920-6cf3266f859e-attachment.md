# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 18_Test_hooks\288_Before_After.spec.ts >> practice index has 25 cards
- Location: tests\18_Test_hooks\288_Before_After.spec.ts:13:1

# Error details

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  locator('.index-card')
Expected: 29
Received: 35
Timeout:  5000ms

Call log:
  - Expect "toHaveCount" with timeout 5000ms
  - waiting for locator('.index-card')
    14 × locator resolved to 35 elements
       - unexpected value "35"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.beforeAll(async () => {
  4  |     // run once per worker — e.g. seed test data, spin a docker container
  5  |     console.log('beforeAll — server is up');
  6  | });
  7  | 
  8  | test.beforeEach(async ({ page }) => {
  9  |     // run before every test — e.g. log in, seed cookies
  10 |     await page.goto('https://app.thetestingacademy.com/playwright/');
  11 | });
  12 | 
  13 | test('practice index has 25 cards', async ({ page }) => {
> 14 |     await expect(page.locator('.index-card')).toHaveCount(29);
     |                                               ^ Error: expect(locator).toHaveCount(expected) failed
  15 | });
  16 | 
  17 | test('sidebar collapse button works', async ({ page }) => {
  18 |     await page.getByLabel('Toggle sidebar').first().click();
  19 |     await expect(page.locator('.tta-shell')).toHaveAttribute('data-sidebar-collapsed', 'true');
  20 | });
  21 | 
  22 | test.afterEach(async ({ page }, testInfo) => {
  23 |     if (testInfo.status !== testInfo.expectedStatus) {
  24 |         await page.screenshot({ path: `out/fail-${testInfo.title}.png`, fullPage: true });
  25 |     }
  26 | });
  27 | 
  28 | 
  29 | test.afterAll(async () => {
  30 |     console.log('afterAll — tear down');
  31 | });
  32 | 
```