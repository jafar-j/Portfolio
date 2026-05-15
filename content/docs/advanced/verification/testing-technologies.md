---
title: "Testing Technologies"
weight: 30
---

# Testing Technologies

## Sample

server/api/test_scraper.py

## Contributions

I wrote the mock tests with the help of Codex, guiding it on what to test and reviewing the output.

## Description

The advanced testing technique used in my test suite is mock testing, implemented through Python's unittest.mock library. Mock testing allows the tests to replace the real LiveWhale API with a controlled fake API, so that the scraper pipeline can be tested in full without depending on the network or current campus event data. This acts as a great baseline test for the scraper because the real events in the LiveWhale API change daily, so every time we test the scraper, different events are returned. This is a factor outside of our control and thus making the real API unreliable as a base test.

The mock tests validated two specific behaviors: that the scraper correctly reads and structures event data from an API response with multiple pages (the JSON we are pulling from has multiple pages), and that recurring events with the same title are properly grouped by the occurance_finder function. For instance, the “test_mock_scrape_events_reads_expected_event_components_from_fake_api” feeds the scraper a controlled two-page fake API response and verifies that all expected fields are correctly extracted and structured. It also checks that the scraper requested pages in the right order, confirming that the page logic works correctly. The “test_mock_scrape_events_combines_recurring_events_with_same_title” feeds the scraper two events with identical titles within a 30-day window and verifies that occurance_finder correctly groups them into a single event with an occurances list rather than keeping them separate. This behavior is vital for the efficiency of our scraping system and the amount of data stored: rather than storing duplicate events in the database, recurring events are joined into one record with their occurrences listed, reducing the overall size of the database and avoiding redundant data.

Mocking was extremely effective here because it let me test edge cases that would be difficult or impossible to reproduce with the real API, like having two events with the exact same title on specific dates. Without the mock, verifying that occurance_finder worked correctly would have required either manually querying the SQLite database both before and after a real scrape to check that recurring events were being joined and removed correctly, or hunting through the live JSON feed to find naturally recurring events and running hardcoded scripts to fetch for the frequency of their specific titles from the database. Neither approach would have been reliable or repeatable. In the future I could see using this technique when testing a component that depends on an external service, a database, or any resource that is unreliable or hard to control in a test environment. External services are problematic for testing because they can go down or behave differently depending on the time of the call to them, similar to what was happening with the LiveWhale API. This makes testing them inconsistent. Mocking removes that dependency and makes it so that tests produce the same result every time regardless of what the external service is doing.

