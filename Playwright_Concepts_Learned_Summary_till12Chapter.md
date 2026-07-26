# Playwright Fundamentals — What You've Learned So Far

Based on `jagtapswapnil1509/LearningPlaywrightFundamentals`. Folders **01–12** contain real working tests; folders **13–23** (Shadow DOM, File Upload/Download, Scroll, Expect Assertions, Test Hooks, Data-Driven Testing, POM, Fixtures, Misc, Advance Framework) only have `.gitkeep` — nothing built there yet, so they're your "next up" list.

---

## 01 — Basics & Test Annotations
**Concept:** A Playwright test gets a `page` fixture injected automatically — no manual browser setup needed. Annotations (`test.skip`, `test.only`, `test.fail`, `test.slow`) control how individual tests run without deleting code.
```ts
test('verify the title', async ({ page }) => {
  await page.goto("https://app.vwo.com");
  await expect(page).toHaveTitle("Login - Wingify");
});
test.skip('conditional', async ({ page, browserName }) => {
  test.skip(browserName === 'firefox', 'Not supported in firefox');
});
```

## 02 — Browser, Context, Page (BCP) Hierarchy
**Concept:** Browser → Context → Page is the core hierarchy: one **Browser** process can hold many **Contexts** (each an isolated "incognito profile" with its own cookies/storage), and each Context can hold many **Pages** (tabs) that share that context's session. The `test()` fixture already gives you an isolated context+page per test.
```ts
const browser = await chromium.launch({ headless: false });
const context1 = await browser.newContext();      // isolated session
const context2 = await browser.newContext();       // another isolated session
const page = await context1.newPage();             // a tab in context1
```
You also learned **context options** — viewport, locale, timezone, geolocation, and device emulation (e.g. simulating an iPhone) — all passed into `browser.newContext({...})`.

## 03 — Locators & Core Commands
**Concept:** Locators are lazy (they don't find the element until an action runs) and auto-wait/retry, which is why Playwright avoids most flakiness. You practiced default locators (`#id`, `.class`, `[name=]`), XPath, and Playwright's recommended **role-based locators** (`getByRole`, `getByText`) which mimic how users perceive the page rather than relying on brittle CSS/XPath.
```ts
await page.getByRole('textbox', { name: 'email' }).fill("abccd");
await page.getByRole('button', { name: 'Create a Free Trial Account' }).click();
```
You also covered `page.goto()`'s `waitUntil` options (`commit`, `domcontentloaded`, `load`, `networkidle`), setting a custom `referer`, and `pressSequentially()` for simulating real keystrokes with a delay.

## 04 — Session/Storage State
**Concept:** Instead of logging in through the UI in every test, Playwright can save an authenticated session to a JSON file (`context.storageState()`) once, then reuse it in later tests via `test.use({ storageState: ... })` — skipping login entirely and speeding up your suite.
```ts
await context.storageState({ path: "./user-session.json" });
// later, in another test file:
test.use({ storageState: "./user-session.json" });
```

## 05 — Reporting (Custom + Allure)
**Concept:** Beyond Playwright's built-in HTML reporter, you built a **custom HTML reporter** (`utils/CustomReporter.ts`, implementing Playwright's `Reporter` interface) and wired up `allure-playwright`. You also used `test.step()` to break a test into named, reportable sub-steps, and `testInfo.attach()` to attach screenshots as evidence per step.
```ts
await test.step("Open dashboard", async () => {
  await page.goto(url, { waitUntil: "domcontentloaded" });
  await captureEvidence(page, testInfo, "dashboard_loaded"); // attaches screenshot
});
```

## 06 — Handling Multiple Elements
**Concept:** When a locator matches several elements, `.all()` and `.allInnerTexts()` let you loop through all of them (e.g., to find the one with specific text and click it) instead of Playwright's normal "strict mode" that errors on ambiguous matches. You also learned `getByTestId()` as the most reliable way to target one specific element directly when text/role locators aren't unique.
```ts
const texts = await page.locator("a.list-group-item").allInnerTexts();
for (const t of texts) if (t === "Forgotten Password") await page.getByText(t).first().click();
```

## 07 — Web Tables & Dynamic Content
**Concept:** This is the big one — reading tabular data by looping over rows/columns with dynamic XPath, using `.nth()` to index into a table, `.filter({ hasText })` to narrow a locator to matching rows, and handling **pagination** by clicking "next" repeatedly until a target row appears.
```ts
const row = page.locator("#employees-tbody tr").filter({ hasText: name });
if (await row.count()) { /* found it */ } else { await nextBtn.click(); }
```
You also extracted this pagination-search logic into a reusable async function (`findRowByName(page, name)`) — an early step toward Page Object–style reuse.

## 08 — Select Boxes & Custom Dropdowns
**Concept:** Native `<select>` elements use Playwright's `selectOption()`, but modern UI-library dropdowns (React-Select style) are just styled `<div>`s, so you open them with a click and pick the option via `getByRole("option", { name })`. You also handled multi-select "chip" dropdowns, creatable/typeable dropdowns, grouped dropdowns, and async/searchable dropdowns that fetch results as you type.
```ts
await page.selectOption("#dropdown", "Option 2");                    // native select
await page.getByTestId("lang-trigger").click();                     // custom dropdown
await page.getByRole("option", { name: "TypeScript" }).click();
```

## 09 — Frames & iFrames
**Concept:** Elements inside an `<iframe>` live in a separate document, so you can't locate them directly on `page` — you first get a `FrameLocator` via `page.frameLocator(selector)`, then locate inside that. You also handled **nested iframes** (a frame inside a frame) and pages with **multiple named frames** (`name='main'`, `name='side'`).
```ts
const frame = page.frameLocator("#frame-one");
await frame.locator("#RESULT_TextField-1").fill("Nexon");
```

## 10 — Keyboard, Mouse, Hover & Drag-and-Drop
**Concept:** `page.keyboard` gives raw key control (press, type, hold modifiers like `Shift+O`), while `locator.hover()` reveals hidden menus before clicking a sub-item. For drag-and-drop, `.dragTo()` handles most cases, but you also learned the manual fallback — `mouse.move → mouse.down → mouse.move (with steps) → mouse.up` — for drag libraries that don't respond to the simple API. You even have a full reference cheat-sheet (`learning.md`) covering key names, mouse options, and right-click/context-menu handling.
```ts
await page.getByText("Add-ons", { exact: true }).hover();
await source.dragTo(destination); // simple drag-drop
await page.mouse.down(); await page.mouse.move(x, y, { steps: 10 }); await page.mouse.up(); // manual fallback
```

## 11 — JavaScript Alerts, Confirms & Prompts
**Concept:** Native browser dialogs (`alert`, `confirm`, `prompt`) pause automation unless handled, so you register a one-time listener with `page.once('dialog', ...)` **before** the action that triggers the dialog, then `accept()` or `dismiss()` it (optionally passing text back for a `prompt`).
```ts
page.once('dialog', async dialog => {
  expect(dialog.message()).toBe("I am a JS Alert");
  await dialog.accept();
});
await page.getByText("Click for JS Alert").click();
```

## 12 — Handling SVG Elements
**Concept:** SVG-based icons (like a search icon rendered as `<svg>`) are clicked with a normal locator (`page.locator('svg')`) just like any DOM element — Playwright doesn't need special handling for SVG itself, but you paired it with complex XPath using `contains()` and multiple `or` conditions to pull dynamic search-result titles off a real e-commerce page (Flipkart).
```ts
await page.locator('svg').first().click();
const results = page.locator("//div[contains(@data-id,'CPU') or contains(@data-id,'ACC')]/div/a[2]");
```

---

## Not Yet Started (empty folders — your roadmap)
13. Shadow DOM
14. File Upload
15. File Download
16. Scroll to Element
17. Expect Assertions (dedicated deep dive)
18. Test Hooks (`beforeAll`/`afterEach` etc. beyond what you've used inline)
19. Data-Driven Testing
20. Page Object Model
21. Fixtures (custom fixtures, beyond the built-in `page`/`browser`)
22. Misc Concepts
23. Advance Framework

## Bonus: Project-Level Setup
Your `playwright.config.ts` already shows applied config knowledge: `testDir`, multi-reporter setup (`line` + custom + `allure-playwright`), `trace: 'on'`, `screenshot: 'on'`, `video: 'on'`, fixed viewport, and a `chromium`-only project (with Firefox/WebKit/mobile projects commented out for later).
