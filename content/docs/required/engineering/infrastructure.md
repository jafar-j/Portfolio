---
title: "Infrastructure"
weight: 10
---

# Infrastructure

## Sample

The files that I mainly worked on. server/api/scraper.py, server/api/sql_init.py, server/api/db_functions.py (events-related functions), server/api/test_scraper.py

## Contributions

I wrote the scraping logic and resolved the duplicate ID issue myself. I only used Copilot to complete lines in the scraper file. I wrote the testing files with the help of Codex, guiding it on what to test and reviewing the edits. I also asked it for help regarding Python syntax, such as when working through the duplicate ID fix.

## Description3

The main tools I used throughout development were VSCode, GitHub Copilot for line completion, and OpenAI’s Codex. First, I used Codex to help me write the test suite for the scraper, guiding it on what to test and reviewing the output. Second, when working through a duplicate ID bug during event scraping, I asked Codex to walk me through Python dictionary syntax since I was less familiar with it at the time.

The bug came up when inserting events into the SQLite database. Many events fetched from Grinnell's LiveWhale API were coming in with duplicate IDs, which caused errors because the database required unique values in the ID column. I worked through the fix on my own: I decided that the right approach was to generate a new unique ID for each event using a counter, while keeping the original scraped ID stored as a separate field for reference. I asked Codex to explain to me how Python dictionaries worked, and whether I could store an inner dictionary within the value attribute of a dictionary. Once I learned the syntax through Codex, I realized that using a dictionary with the counter as the key and the event info as the value was the cleanest way to structure this. This fix allowed the database to function correctly without losing any of the original data from the API.

