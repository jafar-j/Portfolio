---
title: "Medium-Scale Abstraction"
weight: 10
---

# Medium-Scale Abstraction

## Sample

server/api/scraper.py, specifically the scrape_events() function and its helper functions clean_text(), clean_html(), and occurance_finder().

## Contributions

I wrote scrape_events(), all the helper functions mentioned above, and occurance_finder() myself. Copilot was used for line-completion of repetitive parts only, all logic and structure is my own.

## Description

The scrape_events() function abstracts away the full pipeline of fetching Grinnell campus event data, cleaning it, and storing it in the database. A call to scrape_events() receives a consistent, organized dictionary of event records ready for use by other parts of the system, without needing to know anything about the HTTP requests, data normalization, or database writes that happen underneath.

The function achieves abstraction through a set of helpers that each handle one task and serve a single purpose. For instance, clean_text() strips extra whitespace from raw strings, and clean_html() uses BeautifulSoup to strip HTML tags from fields cluttered with markup. occurance_finder() further abstracts the logic for detecting recurring events by grouping events with the same title within a 30-day window and consolidating them into a single record with an occurrences list, rather than cluttering the dataset with duplicates. By isolating each of these concerns into its own helper, scrape_events() remains readable and its steps remain individually testable.

This abstraction is foundational to the rest of the application. The FastAPI backend in main.py triggers scrape_events() at startup without needing to know implementation details, and the email daemon queries the resulting database records to match users with events that align with their interests. Without this abstraction layer cleanly separating data ingestion from data consumption, every other component would need to handle raw, inconsistent event data itself.

