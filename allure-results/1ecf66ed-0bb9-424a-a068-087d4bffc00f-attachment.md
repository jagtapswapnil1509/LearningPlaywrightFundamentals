# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 04_Session_Storage\248_TestVWODashboard.spec.ts >> go directly to settings — no login
- Location: tests\04_Session_Storage\248_TestVWODashboard.spec.ts:15:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic:
    - main "Setup content"
  - main "Application main content" [ref=e3]:
    - generic [ref=e8]:
      - img "Wingify ABTasty Logo - Loading" [ref=e11]
      - generic [ref=e12]: LOADING WINGIFY
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | // Load saved session — already logged in
  4  | test.use({
  5  |     storageState: "./user-session.json"
  6  | });
  7  | 
  8  | test("go directly to dashboard — no login", async ({ page }) => {
  9  |     await page.goto("https://app.wingify.com/#/dashboard/get-started?accountId=1227004");
  10 |     await expect(page).toHaveURL(/dashboard/);
  11 |     console.log("Dashboard loaded — no login needed ✅");
  12 |     await page.waitForTimeout(3000);
  13 | });
  14 | 
  15 | test("go directly to settings — no login", async ({ page }) => {
  16 |     await page.goto("https://app.wingify.com/#/settings/accounts/general?accountId=1227007");
  17 |     await expect(page).toHaveURL(/settings/);
  18 |     console.log("Settings loaded — still logged in ✅");
> 19 |     await page.waitForTimeout(3000);
     |                ^ Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
  20 | });
```