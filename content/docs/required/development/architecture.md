---
title: "Medium-Scale Architecture"
weight: 20
---

# Medium-Scale Architecture

## Sample

`server/api/scraper.py`, `server/api/db_functions.py`, `server/api/sql_init.py`

## Contributions

I designed and implemented the scraping layer, initialized the events table in `sql_init.py`, and wrote the `insert_events_into_db` function in `db_functions.py`. The rest of the database layer and the REST API were built by teammates.

## Description

The backend consists of a layered architecture, where each layer has a separate responsibility in the overall project. The scraping layer, built in scraper.py, fetches raw event data from Grinnell's LiveWhale JSON API and transforms it into structured event dictionaries. From there, the events table defined in sql_init.py and the insert_events_into_db function in db_functions.py handle putting those events into the SQL database. There is a REST API layer built by my teammates which the frontend talks to via HTTP requests. The frontend and backend therefore do not interact directly, as they are connected through the REST API, keeping implementations separated on each side. The frontend focuses on user interaction and displaying events, while the backend handles event scraping, data processing, and storage. This separation means each side can be developed independently without affecting the other.

In the backend, the scraping relies on the “requests” library to fetch data from the JSON API and “BeautifulSoup” for parsing HTML within the fields of the events fetched. The storage layer uses sqlite3 to manage the database. The REST API layer is built with FastAPI and Pydantic, and the frontend is built with React and TypeScript while using Supabase for user authentication.

