E# Astraloq
A service for astronomy enjoyers to come together and share pictures about their passion.

# Images
![image](https://github.com/user-attachments/assets/77576c0d-eec6-414c-8fc8-1994836eb736)
![image](https://github.com/user-attachments/assets/2d99fdbc-7859-4f3a-a2e0-377fd76a607a)
![image](https://github.com/user-attachments/assets/a30ea32c-d1a3-42c4-9a28-4a0ec58e3844)
![image](https://github.com/user-attachments/assets/9fc9ee69-bf8d-4003-b057-b86e90364c02)

# The Why
Beginner astronomers often find it difficult to get their foot in the door when it comes to astrophotography. We wanted to build a platform dedicated to helping astronomy enthusiasts find community.

Astraloq is an event calendar, photo sharing platform, and discussion forum for astral events and community get-togethers. Users have the ability to attend events and connect with fellow attendees. Additionally, users can share and view photos of the events they're attending as another means to engage with the astronomy community.

# How Its Made
_React, Typescript, FastAPI, PostgreSQL, Chakra-UI, VSCode_

To build Astraloq, we used React on the frontend, FastAPI on the backend, and NeonDB (serverless PostgreSQL) as our database. We used Chakra-UI for styled React components and SQLModel as an ORM to synchronize our Python data models with our database schema. On the development side, we used VSCode as our editor of choice and DBeaver as our database client. For some of our astronomy-related event data and photos, we pulled resources from an AstronomyAPI.

# Accomplishments That We're Proud Of
All in all, we're super proud of all that we were able to accomplish in just 24 hours with relatively new tech stack. We're also proud of how much we learned in a single weekend.

Some key features we're particularly proud of include:
- Event-based live chat and photo sharing
- User profiles
- Global and local events calendar

# Future Improvements
We're very proud of what we've been able to accomplish within the 24 hour time limit, so here are some features that we'd love to add in the future.

1. Cloud Cover Display
- When users view an event, there will be an icon and text explaining the weather forecast of both the time and place of the event.
2. Light Pollution Display
- When users view an event, there will be a link that will bring them to a view of the light pollution Bortle level at and around the location of the event 
