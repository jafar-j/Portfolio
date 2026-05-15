---
title: "Quality"
weight: 60
---

# Quality

## Sample

 The files that I mainly worked on. server/api/scraper.py, server/api/sql_init.py, server/api/db_functions.py (events-related functions), server/api/test_scraper.py

## Contributions

I wrote the majority of scraper.py myself with only Copilot’s line-completion, worked on sql_init.py with teammates, wrote the events-related functions in db_functions.py, and test_scraper.py with Codex's assistance.

## Description - Engineering Excellence

The scraper is well-structured for a module that handles multiple concerns at once. The code is cleanly split between helper functions that each do one specific task, such as cleaning and sanitizing specific attributes, and the main scrape_events() function that coordinates them. This separation makes the code readable and means each piece can be understood and tested on its own without needing to understand the whole pipeline. It also makes it so that additions and edits can be done more easily.

The documentation throughout scraper.py is a clear strength and display of good-quality code. The comments explain decisions that aren't obvious from reading the code alone, such as why some scraped event attributes need special handling and where edge cases are tackled. Each function also has a comment before it specifying the purpose of the function as well as input and output. This kind of documentation was especially valuable on a team project where a teammate reading the code could understand decisions they weren't part of. 

Additionally, the scraper handles many edge cases throughout. Missing fields, None values, and inconsistent data from the LiveWhale API all default to safe base values rather than crashing. The 25Live side was especially difficult to work with because there was very little enforcement of required user input when people created events. We found that an event can be published with barely any of the attributes filled in, so the scraper had to assume nearly any field could be missing or empty at any time. Had the 25live interface enforced stronger requirements on event data inputs, a lot of my extra work for calculating and assigning values to attributes wouldn’t have needed to be done. For instance, there is an “rrule” attribute in every event scraped from 25live that, if filled by the user, would indicate the recurrence of each event and therefore be sent directly through our ics files. Since 25live did not require this attribute to be filled by the users, all of the “rrule” values were null. This meant the code had to adapt to incomplete and inconsistent data rather than relying on the API to provide clean recurrence information, and I thus had to implement the occurance_finder function. This shows how our system built robust mechanisms to deal with an external API that produced inconsistent and incomplete data. 

The scraper test suite also reflects great engineering qualities as shown in the verification competencies in both the required and advanced sections. Tests run against a completely separate temporary database so they never touch real app data, and that isolation is enforced automatically by the test setup rather than relying on any developer to manually reset state. 

## Description - Improvements

The biggest gap in quality can be seen in db_functions.py, which I contributed to. Most functions open and close their own database connection independently, which means operations that logically belong together require multiple separate trips to the database. This works fine at small scale but would become a performance issue as the app grows. With more time, the right approach would be to share a connection by possibly passing it into functions that need to work together.

Another area for future improvement would be having more consistent documentation across all files. Some files contain less extensive comments before and within functions and are harder to understand what the code does. This inconsistency would be something to address and fix as a group if we were given more time.

There is also no error handling around many functionalities, such as the database operations. If an insertion fails or a query returns an unexpected result, most functions will have a high probability of crashing without an indication of what went wrong. Adding proper error handling with clear messages would make the system significantly easier to debug when something does not function as planned.
