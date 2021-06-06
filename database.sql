-- create database with name "weekend-react-gallery"

CREATE TABLE gallery (

	id SERIAL PRIMARY KEY,
	description VARCHAR(255),
	likes INT NOT NULL,
	path VARCHAR(255) NOT NULL
	
);

INSERT INTO gallery (description, likes, path)
VALUES ('This statue is a depiction of the four cardinal directions, personified.', 0, 'images/cardinal.jpg');

INSERT INTO gallery (description, likes, path)
VALUES ('My friend and I messing around with a 35mm camera.', 0, 'images/friend.jpg');

INSERT INTO "gallery" (description, likes, path)
VALUES ('The Ice Age National Trail runs through the Driftless region of Wisconsin, and views of the many bluffs can be seen throughout.', 0, 'images/bluffs.jpg');

INSERT INTO gallery (description, likes, path)
VALUES ('Dad has been golfing since he was able to stand. Occasionally, my sister and I get to go with!', 0, 'images/family.jpg');

INSERT INTO gallery (description, likes, path)
VALUES ('This is an old BTS photo from a music video a couple years back.', 0, 'images/flowers.jpg');

SELECT * FROM "gallery";