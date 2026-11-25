# Playwright E-Commerce UI & API Automation Framework

An end-to-end test automation framework built using **Playwright** and **JavaScript** following the **Page Object Model (POM)** design pattern, integrated with **GitHub Actions CI/CD**.

## Key Features
* **Page Object Model (POM):** Clean separation of locators, page actions, and test assertions.
* **UI & API Coverage:** Automates both browser workflows and REST API endpoints (`GET` and `POST` validations) in a single suite.
* **Failure Diagnostics:** Configured to capture screenshots, videos, and trace files automatically on test failure.
* **CI/CD Integration:** Automated test execution on every push using GitHub Actions.

## How to Run Locally
1. Clone the repository: `git clone https://github.com`
2. Install dependencies: `npm install`
3. Run all tests: `npx playwright test`
4. View HTML Report: `npx playwright show-report`
