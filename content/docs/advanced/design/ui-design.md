---
title: "User Interface Design"
weight: 40
---

# User Interface Design

<aside class="ui-design-gallery" aria-label="Introduction page design versions">
  <figure>
    <img src="../../../../images/ui-design/version-1.webp" alt="First version of the Grinvites introduction page">
    <figcaption>Version 1</figcaption>
  </figure>
  <figure>
    <img src="../../../../images/ui-design/version-2.png" alt="Second version of the Grinvites introduction page with community cards">
    <figcaption>Version 2</figcaption>
  </figure>
  <figure>
    <img src="../../../../images/ui-design/version-3.webp" alt="Third version of the Grinvites introduction page with three setup steps">
    <figcaption>Version 3</figcaption>
  </figure>
  <figure>
    <img src="../../../../images/ui-design/version-4.webp" alt="Final version of the Grinvites introduction page">
    <figcaption>Version 4</figcaption>
  </figure>
</aside>

## Sample

Introduction page component that is loaded after the landing page and before the email sign up page. Specific file: `web/src/components/get-started-page.tsx`. All alternative design versions of the introduction page are shown in the images to the right.

## Contributions

I wrote the introduction page with the help of Codex, guiding it on what features to add and change while reviewing its edits.

## Description

The portion of the UI I designed is the introduction page that users see before signing up with their emails. The design went through four iterations, each further adopting UI design principles learned in class.

Before adding this page, there was no introduction page. Users were immediately faced with the landing page that displayed a small squirrel, the app title, and the line “Get invited to events at Grinnell that actually match your interests”, along with a “Get started” button. I felt that our app’s purpose was not immediately clear and it was not as informative of a page I would have liked it to be. I did not want to disrupt the simplicity, however, so I added the introduction page after. The first version of the introduction page had a short, vague tagline: "Get invited to events at Grinnell that actually match your interests" with two feature cards below it. While clean, the tagline didn't make it immediately clear that invites go to the user's existing calendar, which was the core value of the app. This violated the principle of discoverability, since users couldn't determine what the system actually did just from reading the landing page. So I moved to the second version, where I tried to address this by replacing the text with a collage of campus organization logos, making the page more visually engaging. However, this added too much information at once, and I had fears of overwhelming users’ short-term memory, A full grid of logos pushed beyond what a first-time visitor could meaningfully process and thus violated that principle of UI design. I also had difficulties importing some images in that version. In the third version I tried going in the other direction by ditching the visuals and adding a three-step quick breakdown of how the app works, but this required too much reading and I feared it would overload our users’ attention spans.

The final version settled on a clear, descriptive line: "Grinvites sends personalized event invitations to your calendar based on your interests and schedule, so the right campus plans find you", paired with just two catchy feature cards that showed the conveniences of our app relative to the users’ lives. I figured the goal of the introduction page is to communicate quickly and concisely, and that is what this version did. It also appealed to the users by putting them as the center and focus of the app through the repetitive use of the words “you” and “your”. The page also maintained the simplistic style and color themes as other pages used in our app. This design works because it keeps the cognitive load low, communicating the core idea in one sentence without requiring the user to piece together information from multiple elements. The two cards in the center also use the Gestalt principle of proximity and similarity by grouping related benefits of the app together in a visual format that is easy to scan. The bolding of the catchy and main lines on this page also follow the Gestalt principle of figure/ground. Overall, the final design of this new introduction page allows a new user to quickly understand what our app is and how it serves them, thus improving discoverability while preserving the simple, approachable feel that our app was meant to have.
