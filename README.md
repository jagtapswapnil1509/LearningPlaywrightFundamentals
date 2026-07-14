# Learning Playwright Fundamentals

This repository contains a small Playwright test project for learning the fundamentals of browser automation and end-to-end testing.

## Project Overview

The project includes:
- Playwright test configuration
- Example browser tests
- HTML test report output
- Basic setup for running tests in Chromium, Firefox, and WebKit
- Comprehensive test examples organized by category:
  - **01_Basics/**: Basic test structure and annotations
  - **02_first_tests/**: Browser context, page, and configuration setup
  - **03_Locators_Commands/**: Locator strategies, navigation, and Playwright commands
  - **04_Session_Storage/** through **23_Advance_Framework/**: Advanced testing patterns

## Prerequisites

Make sure you have the following installed:
- Node.js (recommended: v18 or newer)
- npm

## Installation

Install the project dependencies:

```bash
npm install
```

## Running Tests

Run the test suite:

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

## Project Structure

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
└── README.md
```

## Current Learning Focus

This repository currently includes beginner-friendly examples for:
- basic Playwright test structure
- test annotations and browser context configuration
- multiple pages and multiple browser contexts
- locators and common commands
- assertions and reporting

You can run a specific test file like this:

```bash
npx playwright test tests/02_first_tests/237_BCP_Test_Options.spec.ts --headed
```

## Notes

This repository is intended as a beginner-friendly starting point for learning Playwright concepts such as:
- navigating pages
- locating elements
- assertions
- test configuration
- generating reports
- working with Playwright reports and test artifacts
