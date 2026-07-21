# Learning Playwright Fundamentals

This repository is a hands-on Playwright learning project built with TypeScript. It contains a growing set of end-to-end test examples that cover the core concepts of browser automation, element interaction, assertions, and reporting.

## What this project covers

The examples in this repository are organized by topic and include:
- basic Playwright test structure and annotations
- browser context and page configuration
- locator strategies and common commands
- assertions and waits
- handling alerts, frames, and shadow DOM
- file upload and download scenarios
- keyboard, hover, drag-and-drop interactions
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
