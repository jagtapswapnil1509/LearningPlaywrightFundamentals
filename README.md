# Learning Playwright Fundamentals

This repository contains a small Playwright test project for learning the fundamentals of browser automation and end-to-end testing.

## Project Overview

The project includes:
- Playwright test configuration
- Example browser tests
- HTML test report output
- Basic setup for running tests in Chromium, Firefox, and WebKit

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
│   └── example.spec.ts
├── playwright.config.ts
├── package.json
└── README.md
```

## Notes

This repository is intended as a beginner-friendly starting point for learning Playwright concepts such as:
- navigating pages
- locating elements
- assertions
- test configuration
- generating reports
