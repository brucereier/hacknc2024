insert into hacknc.public.user (id, username, password, avatar_url) values (1, 'tpaddeley0', 'wY5>Qbx~', 'http://dummyimage.com/156x100.png/dddddd/000000');
insert into hacknc.public.user (id, username, password, avatar_url) values (2, 'tkringe1', 'wQ8)A65!Jk@pjTML', 'http://dummyimage.com/177x100.png/5fa2dd/ffffff');
insert into hacknc.public.user (id, username, password, avatar_url) values (3, 'ablondell2', 'lN2#~hnP', 'http://dummyimage.com/211x100.png/5fa2dd/ffffff');
insert into hacknc.public.user (id, username, password, avatar_url) values (4, 'kratlee3', 'yZ9/C0<ijAFjgK~', 'http://dummyimage.com/134x100.png/5fa2dd/ffffff');
insert into hacknc.public.user (id, username, password, avatar_url) values (5, 'gsteinhammer4', 'dM2$A@V4GLq~/', 'http://dummyimage.com/230x100.png/5fa2dd/ffffff');
insert into hacknc.public.user (id, username, password, avatar_url) values (6, 'lfeaver5', 'aS4#pZy,Kc7sSaw', 'http://dummyimage.com/250x100.png/cc0000/ffffff');
insert into hacknc.public.user (id, username, password, avatar_url) values (7, 'asteinor6', 'qO2+%&!H', 'http://dummyimage.com/209x100.png/cc0000/ffffff');
insert into hacknc.public.user (id, username, password, avatar_url) values (8, 'fbriffett7', 'bW2=xl$.G6', 'http://dummyimage.com/218x100.png/dddddd/000000');
insert into hacknc.public.user (id, username, password, avatar_url) values (9, 'tserver8', 'nH4''pJgz', 'http://dummyimage.com/106x100.png/ff4444/ffffff');
insert into hacknc.public.user (id, username, password, avatar_url) values (10, 'cambrosi9', 'nI1}y7ik9\T.Gce', 'http://dummyimage.com/127x100.png/dddddd/000000');

INSERT INTO hacknc.public.event (id, image_url, title, description, is_global, date, latitude, longitude, country) VALUES
(1, 'https://static.vecteezy.com/system/resources/thumbnails/030/353/225/small_2x/beautiful-night-sky-background-ai-generated-photo.jpg', 'Meteor Shower Watch', 'Join us for a spectacular view of the meteor shower.', true, '2024-08-12 22:00:00', 34.0522, -118.2437, 'USA'),
(2, 'https://www.hindustantimes.com/ht-img/img/2024/10/02/1600x900/Solar_Eclipse_1725437756581_1727852718061.webp', 'Solar Eclipse Viewing', 'Experience the wonder of a solar eclipse with fellow enthusiasts.', true, '2024-04-08 15:30:00', 36.7783, -119.4179, 'USA'),
(3, 'https://images.unsplash.com/photo-1490814525860-594e82bfd34a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8fA%3D%3D', 'Lunar Observation Night', 'A night dedicated to observing the moon and its craters.', false, '2024-05-15 20:00:00', 40.7128, -74.0060, 'USA'),
(4, 'https://images.unsplash.com/photo-1641895958846-19dab3471449?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN0YXJyeSUyMG5pZ2h0JTIwc2t5fGVufDB8fDB8fHww', 'Star Gazing Camp', 'Join us for a weekend of camping under the stars.', true, '2024-06-20 18:00:00', 37.7749, -122.4194, 'USA'),
(5, 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/%D0%A1%D0%B2%D0%B5%D1%82_%D0%BE%D1%82_%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D0%BD%D0%B8_-_panoramio.jpg/1200px-%D0%A1%D0%B2%D0%B5%D1%82_%D0%BE%D1%82_%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D0%BD%D0%B8_-_panoramio.jpg', 'Comet Sightings', 'A meet-up for spotting the latest comet.', false, '2024-07-10 23:00:00', 41.8781, -87.6298, 'USA'),
(6, 'https://resources.perimeterinstitute.ca/cdn/shop/collections/PIStore_Topic_HeaderImages_Topic-Astronomy.jpg?v=1458607977&width=2048', 'Astronomy Workshop', 'Learn about telescopes and stargazing techniques.', true, '2024-09-05 14:00:00', 34.0522, -118.2437, 'USA'),
(7, 'https://cdn.mos.cms.futurecdn.net/8K726hHhYxYx4vc7LKqjyV-1200-80.jpg', 'Planetary Alignment', 'Observe the rare alignment of planets in the night sky.', true, '2024-10-15 19:00:00', 39.7392, -104.9903, 'USA'),
(8, 'https://discoveryplace.org/wp-content/uploads/2023/06/Astrophotography-hero-scaled.jpeg', 'Astrophotography Contest', 'Showcase your best astrophotography and win prizes.', false, '2024-11-01 00:00:00', 38.9072, -77.0369, 'USA'),
(9, 'https://www.rmg.co.uk/sites/default/files/styles/full_width_1440/public/2020-11/G-28529-27_Winner%20and%20Overall%20Winner_Andromeda%20Galaxy%20at%20Arm_s%20Length%20%C2%A9%20Nicolas%20Lefaudeux.jpg?itok=8xr43P56', 'Galactic Exploration', 'Explore the mysteries of the galaxy with experts.', false, '2024-01-20 17:00:00', 34.0522, -118.2437, 'USA');

delete from hacknc.public.event;

select * from hacknc.public.user;
select * from hacknc.public.event;

