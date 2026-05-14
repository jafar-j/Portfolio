---
title: "Self-Learning"
weight: 20
---

# Self-Learning

## Sample

Slides 2 and 3 of my group’s SQL tutorial presentation, shared with the group.

Link to group presentation: https://docs.google.com/presentation/d/1FWnSvWNzKjTJMFIj1lAxnn-R3CQxXbgFXCxQZ8PdZCQ/edit?usp=sharing

## Contributions

I wrote and presented slides 2 and 3, covering what SQL and SQLite are and how to create and populate a table. I also self-learned Python throughout the project to build the backend scraper, as I had not worked with Python before.

## Description

My tutorial slides covered SQL and SQLite: what they are, how they work, and how to get started using them. Structured Query Language is a language used to store, retrieve, and manipulate data stored in relational databases. SQLite is a lightweight, serverless version of SQL that stores the entire database in a single local file, making it easy to set up and run without any server infrastructure. In our project, we used SQLite to store all user data and scraped event data, and to link users to events through shared interests. Before this project I had little experience with SQL, so this was my first time learning how to apply it with real data. I also had to self-learn Python from scratch to write the scraping and database filling code that made up my core contribution to the backend.

SQL was essential to the project. Its main strength in our setup was that it required no server, so anyone could run the project on their computer with a simple setup and test their changes locally. A weakness was that SQL errors were hard to track down and debug, especially when the database became more complex. If we were handling significantly more data in the future, we would likely need to move away from SQLite to a server-based database system. One sticking point that came up during development was that multiple teammates were all writing code that interacted with the database at the same time. This resulted in duplicate table initializations, data clears for testing, and data insertions. So when people pushed their changes, the logic for clearing and reinitializing tables would clash, causing errors for other teammates. This is something worth knowing before adopting SQLite on a team project. It works great for a single developer, but once multiple people are handling data in different parts of the codebase, since there is no server coordinating changes, one will likely run into conflicts that a server-based database would avoid.

