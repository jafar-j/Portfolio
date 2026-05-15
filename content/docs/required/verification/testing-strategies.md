---
title: "Testing Strategies"
weight: 10
---

# Testing Strategies

## Sample

server/api/test_scraper.py, testing server/api/scraper.py

## Contributions

I wrote the tests with the help of Codex, guiding it on what to test and reviewing the output.

## Description

The test suite for the scraper is split into two categories: basic tests and mock tests. The mock tests will be discussed in the Verification of the Advanced Competencies section. Each test runs against a temporary SQLite database that is completely separate from the real app database used. This was intentional, so that tests never interact with or change real app data and can be run safely by anyone on the team at any time without side effects.

The basic tests run and test each of the scraper's individual helper functions in isolation: clean_text, clean_html, sanitize_name, and occurance_finder. Each test verifies that the helper produces the correct output for a given input. For example, one test labelled “test_text_cleaning_removes_extra_whitespace” confirms that extra spaces, tabs, and newlines are collapsed into a single clean string so that event attributes like titles, locations, and organization names are stored in the database in a consistent, readable format. Another test labelled “test_html_cleaning_removes_tags_and_handles_empty_html” checks that HTML markup is stripped correctly and that retrieving None through the scraped data returns an empty string rather than crashing. This edge case was important to be tested as not all events in the LiveWhale API include a summary. There is also a live integration test, “test_real_scraper_populates_database_with_live_events”, which calls the real scraper against the actual Grinnell API and checks that events are returned and written to the temporary SQLite database. This test is also skipped automatically if the API is not working.

The functions not covered by tests are get_interest_id and add_event_interest, which handle linking events to interests in the database. These were written by teammates as part of the broader database layer, so I did not include tests for them.

