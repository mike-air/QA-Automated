# Cypress Automation Test Suite for HustleSasa QA Assignment

This repository contains automation test scripts developed using Cypress for the HustleSasa QA Intern Hiring Process. The test suite covers various aspects of UI, API, and performance testing.

## Overview

This test suite automates the following test cases:
- **Test Case 1: Login Page Automation** – Valid, invalid, and empty field login tests.
- **Test Case 2: Form Submission & Validation** – Validate that a number-only input field accepts numbers and rejects alphabets.
- **Test Case 3: Handling Popups & Alerts** – Automate alert box interactions (accepting alerts, dismissing confirmations).
- **Test Case 4: Drag & Drop Interaction** – Verify that dragging Column A onto Column B swaps their positions.
- **Test Case 5: iFrame Handling** – Switch to the TinyMCE iFrame, type text, and verify that the content is updated.
- **Test Case 6: API Response Validation** – Simulate a login action using the Reqres public API and validate API responses.
- **Test Case 7: Page Load Time Validation** – Measure the page load time and assert that it is under 3 seconds.

## Prerequisites

- **Node.js**: Download and install from [Node.js Official Site](https://nodejs.org/).
- **npm**: Comes bundled with Node.js.
- **Git**: (Optional) For cloning this repository.
- **Cypress**: The test framework used for automation.


### Install Dependencies

```bash
npm install
```

### Run the Tests

```bash
npx cypress run 
```
or
```bash
npx cypress open
```


## To Run a Specific Test Case
To run a specific test case, use the following command:

```bash
npx cypress run --e2e --browser=chrome --spec "cypress/e2e/test-case-1.cy.js"
```         
Replace "test-case-1.cy.js" with the name of the test case you want to run.



## To Run All Test Cases
To run all test cases, use the following command:

```bash
npx cypress run 
```






