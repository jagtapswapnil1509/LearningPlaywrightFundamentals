# Learning Playwright Fundamentals

This repository is a hands-on Playwright learning project built with TypeScript. It contains a growing set of end-to-end test examples that cover the core concepts of browser automation, element interaction, assertions, and reporting.

## Latest Updates (2026-08-07)

### Chapter 19 — FakerJS Data-Driven Testing
Added DDT examples using `@faker-js/faker` to generate dynamic test data:
- `302_DDT_fakerJS1.spec.ts` — basic FakerJS integration generating dynamic user data for registration
- `303_DDT_FakerJsAdvance.spec.ts` — advanced FakerJS with a reusable `generateuser()` helper function
- `304_DDT_fakerJS2.spec.ts` — FakerJS loop-driven test generating 5 users across multiple email domains

### Updated Test Reports
- Refreshed `tta-report` and `allure-results` with latest test run outputs

---

## Previous Updates (2026-08-06)

### Chapter 3 — Locators & Commands
Added a new practice test file for locator strategies:
- `03_Locators_Commands.spec.ts` — Task 3.1: locating the username field three different ways (by id, by `getByRole`, and by CSS attribute selector), filling values, and asserting with `toHaveValue`

### Updated Test Reports
- Refreshed `tta-report` and `allure-results` with latest test run outputs

---

## Previous Updates (2026-08-06)

### Chapter 19 — Data-Driven Testing
Added DDT examples reading from multiple formats:
- `291_DDT.spec.ts` — basic inline array-driven test
- `294_LoginTest.spec.ts` — login DDT with JSON data
- `295_Read_Write_Filesystem.ts` — filesystem read/write utility
- `296_DDT_JsonArray.spec.ts` — inline JSON array data source
- `297_DDT_CSV.spec.ts` — CSV-based DDT with `csvReader` utility
- `298_DDT_JSON.spec.ts` — external JSON file-driven DDT
- `299_DDT_YAML.spec.ts` — YAML-based DDT with `yamlReader` utility (js-yaml)
- `300_DDT_XLSX.spec.ts` — Excel-based DDT with `xlsxReader` utility (xlsx)
- `301_DDT_TSV.spec.ts` — TSV-based DDT with `tsvReader` utility

### New Utilities (`util/`)
| File | Description |
|------|-------------|
| `csvReader.ts` | Reads CSV test data into typed arrays |
| `yamlReader.ts` | Reads YAML test data (requires `js-yaml`) |
| `xlsxReader.ts` | Reads Excel test data (requires `xlsx`) |
| `tsvReader.ts` | Reads TSV test data |

### New Test Data (`test-data/`)
- `login-data.csv`, `login-data.yaml`, `login-data.tsv`, `login-data.xlsx`
- `registration-data.json`, `login.json`

### Dev Tools
- Added `go-go-go` skill (`.commandcode/skills/go-go-go/SKILL.md`) — one-command README-update, commit, and push workflow
- Updated `package.json` with `js-yaml`, `xlsx`, and `@types/js-yaml` dependencies

## What this project covers

The examples in this repository are organized by topic and include:
- basic Playwright test structure and annotations
- browser context and page configuration
- locator strategies and common commands
- assertions and waits
- generic `expect` assertions (`toBe`, `toEqual`, `toBeTruthy`, `toBeGreaterThan`, etc.) and polling with `expect.poll`
- web-first locator assertions (`toBeVisible`, `toContainText`, `toHaveAttribute`, `toHaveCount`, `toBeChecked`, `toBeEnabled`) and soft assertions with `expect.soft`
- test hooks and annotations: `beforeEach`/`afterEach`/`beforeAll`/`afterAll`, `test.skip`/`slow`/`fixme`/`fail`, `test.step`, `describe.serial`, and tag-based filtering with `--grep`
- handling alerts, frames, and shadow DOM
- file upload and download scenarios
- keyboard, hover, drag-and-drop interactions
- scrolling elements into view and handling lazy-loaded content
- web tables and dynamic content
- reporting with Playwright and custom HTML reporting

## Prerequisites

Make sure the following tools are installed:
- Node.js 18 or newer
- npm

## Installation

Install dependencies from the repository root:

```bash
npm install
npx playwright install
```

## Running tests

Run the full suite:

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test tests/11_JS_Alerts/270_Jsalert.spec.ts
```

Run tests by tag:

```bash
npx playwright test --grep @smoke
```

This repository also includes practice and learning examples for alerts, frames, keyboard interactions, file upload/download flows, and custom reporting.

Run tests in headed mode:

```bash
npx playwright test --headed
```

Open the HTML report after a run:

```bash
npx playwright show-report
```

## Custom reporting

The project also includes a custom HTML reporter implemented in `utils/CustomReporter.ts`.

Run the reporter-driven example with:

```bash
npx playwright test tests/05_Allure_Reporting/249_TestVWODashboard_CustomReporter.spec.ts --project=chromium --reporter=line,./utils/CustomReporter.ts
```

This generates reports under the `tta-report/` folder.

## Project structure

```text
.
├── tests/
│   ├── 01_Basics/
│   ├── 02_first_tests/
│   ├── 03_Locators_Commands/
│   ├── 04_Session_Storage/
│   ├── 05_Allure_Reporting/
│   ├── 06_Multiple_Element_/
│   ├── 07_WebTables/
│   ├── 08_Web_Select_Frames_Iframe/
│   ├── 09_Frame_Iframe/
│   ├── 10_Keyboard_Hover_Drag_Drop/
│   ├── 11_JS_Alerts/
│   ├── 12_Handle_SVG/
│   ├── 13_Shadow_DOM/
│   ├── 14_FileUpload/
│   ├── 15_File_Download/
│   ├── 16_Scroll_toElement/
│   ├── 17_Expect_Assertions/
│   ├── 18_Test_hooks/
│   ├── 19_Data_Driven_Testing/
│   ├── 20_Page_Object_Model/
│   ├── 21_Fixture/
│   ├── 22_Misc_Concepts/
│   ├── 23_Advance_Framework/
│   ├── PlaywrightCodePractice/
│   ├── Practice/
│   └── Projects/
├── playwright.config.ts
├── package.json
├── utils/
└── README.md
```

## Notes

This repository is intended to be a beginner-friendly starting point for learning Playwright concepts such as:
- navigating pages
- locating elements
- working with assertions and waits
- configuring tests and browsers
- producing reports and test artifacts
