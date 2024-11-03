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

INSERT INTO post (id, event_id, user_id, photo_url, text, timestamp) VALUES
(1, 1, 1, 'https://images-ext-1.discordapp.net/external/uubuYtEva2bgV1nj-sovv45Q44BlQSkbooSawLeifO4/%3Fauto%3Dcompress%26cs%3Dtinysrgb%26w%3D1260%26h%3D750%26dpr%3D2/https/images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?format=webp&width=1936&height=1088', 'What a stunning meteor shower we witnessed last night!', '2024-08-13 09:00:00'),
(2, 2, 2, 'https://images-ext-1.discordapp.net/external/M8XdgOjyTyg4n-DtAD7kK6OOyFyKj_Rqr2fmcg5RvV0/https/c.stocksy.com/a/m6pN00/z9/5678008.jpg?format=webp&width=1854&height=1236', 'The solar eclipse was breathtaking; can’t wait for the next one!', '2024-04-09 10:30:00'),
(3, 3, 3, 'https://images-ext-1.discordapp.net/external/nIZwOXTgd9Du7yDmLNEyCP0SYtOCutmftrHYiCUpToo/https/www.travelandleisure.com/thmb/Jmcth-BwkB9_n9BoZl2S3hOonrw%3D/1500x0/filters%3Ano_upscale%28%29%3Amax_bytes%28150000%29%3Astrip_icc%28%29/TAL-meteor-shower-NOVSKY1024-928820a444b14e8db06efc20b966620f.jpg?format=webp&width=1858&height=1236', 'The lunar craters were crystal clear during our observation.', '2024-05-16 21:00:00'),
(4, 4, 1, 'https://images-ext-1.discordapp.net/external/eKRdjCSGN4cZhIK4vt-Zay18pEl6UgI9JHwLoORfopw/%3Fauto%3Dcompress%26cs%3Dtinysrgb%26w%3D800/https/images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?format=webp&width=1600&height=1148', 'Camping under the stars was an unforgettable experience.', '2024-06-21 22:30:00'),
(5, 5, 2, 'https://media.discordapp.net/attachments/568814132405600279/1302452758674145290/solar-system-emergence-spitzer-telescope-telescope-41951.png?ex=67282b28&is=6726d9a8&hm=fc0223874e059eb6f9e432904a818c3e97e916545de5ca44706414d816a89c65&=&format=webp&quality=lossless&width=1100&height=688', 'Caught a glimpse of the comet; it was magical.', '2024-07-11 00:00:00'),
(6, 6, 3, 'https://images-ext-1.discordapp.net/external/fNW3gc0P1zgIhnKyjG7s3CgaQWnqouD8f6K9IIFmmo8/%3Fauto%3Dcompress%26cs%3Dtinysrgb%26w%3D800/https/images.pexels.com/photos/924824/pexels-photo-924824.jpeg?format=webp&width=1600&height=1066', 'Learning about astrophotography was a game changer for me.', '2024-09-06 15:00:00'),
(7, 7, 1, 'https://images-ext-1.discordapp.net/external/ujn8uM5c8bLa0co3WQrtKootztHOrry70nh9fRdcki8/%3Fauto%3Dcompress%26cs%3Dtinysrgb%26w%3D800/https/images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg?format=webp&width=1600&height=1068', 'The planetary alignment was a sight to behold!', '2024-10-16 20:00:00'),
(8, 8, 2, 'https://images-ext-1.discordapp.net/external/Y4otNBGnlkW6EPtd2DiSg4DcfF9_zQoAAPPehFNWiDI/%3Fauto%3Dcompress%26cs%3Dtinysrgb%26w%3D800/https/images.pexels.com/photos/517884/pexels-photo-517884.jpeg?format=webp&width=1600&height=1066', 'Excited to share my astrophotography from the contest!', '2024-11-02 10:00:00'),
(9, 9, 3, 'https://c.stocksy.com/a/m6pN00/z9/5678008.jpg', 'The lecture series was enlightening and inspiring.', '2024-12-06 19:30:00'),
(10, 10, 1, 'https://images-ext-1.discordapp.net/external/hFc4eQOSJO47_lzSBy8I5W1l8qJzJgJ1dldpp2Lrrrk/%3F_a%3DDAJAUVWIZAAA/https/res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_scale%2Cw_640/v1/media/gmg/GR5IUEKEORDMVGN2HYOUCYWPQ4?format=webp&width=1280&height=854', 'Exploring the galaxy’s mysteries was truly fascinating.', '2024-01-21 18:00:00');

delete from hacknc.public.event;

select * from hacknc.public.user;
select * from hacknc.public.event;

