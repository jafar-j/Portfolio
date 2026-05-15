---
title: "Testing Infrastructure"
weight: 20
---

# Testing Infrastructure

## Sample

server/api/test_scraper.py, Makefile, run via “make test-scraper” from the project root.

## Contributions

I wrote the tests in test_scraper with the help of Codex. A teammate created the Makefile to standardize how tests are run across the project, and I edited it to add a target for running my scraper tests.

## Description

The testing infrastructure for the scraper uses Python's built-in unittest framework combined with pytest as the test runner. I added the test-scraper target to the makefile so that running “make test-scraper” from the project root executes my full test suite in one command, running both the basic and advanced tests in one go. A key part of my testing infrastructure is the ScraperDatabaseTestCase class in the test file. It handles setting up the database and tearing it down automatically for every test. It creates a new temporary SQLite database before each test and cleans it up afterward, thus ensuring that the tests are isolated and my teammates do not have to reset any database state between runs.

A specific instance where the testing helped identify an issue and saved the team some work was when a test caught that events were being successfully written to the database but the creation_time_stamp field within them was coming back empty. This was not visible through basic print testing since we had forgotten to print that field, and the rest of the event data looked correct. The unit test flagged it by asserting that the field was non-empty, and once identified it was a straightforward fix that would have caused issues with sending ics file invites down the line if left undetected.

