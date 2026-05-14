---
title: "Collaboration"
weight: 40
---

# Collaboration

## Sample

Pull requests #16, #18, #37, and #44 from “grinvites” repo in Github organization: https://github.com/social-won/grinvites/pulls?q=is%3Apr+is%3Aclosed 

## Contributions

All four instances were examples of my involvement in collaborative work with the team.

## Description

Instance 1: Filing a Pull Request (PR #16): This was my first pull request that introduced the initial scraper in scraper.py, which fetched event data from Grinnell’s events website and structured it as a dictionary carrying all the events. The difficulty here was making sure the data I was pulling contained the right attributes for the rest of the team to work with. Teammates working on the database and API needed to know what fields were available before they could build on top of it. Therefore, filing this PR served to give the team a look at what the scraper was producing and opened up a conversation about whether the data structure was right and whether it should be integrated with the database. There were no major collaboration difficulties at this stage, and the team told me that I was good to start putting the events into the database.

Instance 2: Filing a Pull Request (PR #18) as a follow up to PR #16: After teammates reviewed PR #16 and confirmed that the scraped data had the right structure, I filed PR #18 to integrate the scraper with the database. This involved creating scraper_to_db.py (although I later deleted this file) to handle inserting events into the database, and cleaning up sql_init.py. I also created the initialize_database() function in sql_init to be used universally by other files when accessing and changing values in the database. Upon filing this PR, a teammate responsible for sending the mail invites looked at the contents within the events uploaded to the database and notified me of further attributes that needed to be scraped in order to build the correct ics file invite. I followed up on the teammate’s request through PR #35, where I added the extra attributes that were requested. A difficulty that arose here was making sure that all attribute types and names were in the correct format to be put in the ics event invites. I therefore had to coordinate with the teammate putting together the ics files to adjust the types and formats of the events’ contents.  For example, I was told that the start and end times for events had to be in ISO date format, whereas my scraper had retrieved them as strings at the time. I had to therefore convert some dates to this format to match the syntax required for the mail invitations to work. 

Instance 3: Filing and Resolving a Bug (PR #37): During a group meeting where we were integrating multiple parts of the codebase together, I had just pushed my updated scraper that fetched events from a JSON endpoint rather than through web-scraping an HTML site. While testing, we ran into an error during the database initialization. Our code cleared the events table in the database before scraping (which is correct), but there was an error saying the events table was not found. What made this difficult to track down was that it was working fine on my computer but failing on my teammates' machines. This happened because the table was always already there in my local file, but for someone running the code for the first time it would fail immediately as the table was never previously created. Once I identified the cause, I fixed it by checking whether the table already exists, then quickly committed and filed a PR. Teammates could then continue testing and working on integrating their parts of the codebase.

Instance 4: Performing a Code Review (PR #44): This PR was a large integration done by my teammate that merged the completed frontend branch into main. It also included edits to backend files I had written. I reviewed the changes to the backend to make sure the changes were compatible with the existing scraping logic. I also checked that the additions to the database that consisted of adding a new user and the users’ interests didn't break any existing database interactions. The difficulty here was the size of the PR. It included thousands of lines of changes across the frontend and backend. In hindsight, breaking it into smaller, more focused PRs would have made the review process more manageable and easier to catch potential issues. No major issues came up and I approved the merge after verifying backend functionality was intact.

