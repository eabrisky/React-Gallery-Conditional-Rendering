-- create database with name "weekend-react-gallery"

CREATE TABLE gallery (

	id SERIAL PRIMARY KEY,
	description VARCHAR(255),
	likes INT NOT NULL,
	path VARCHAR(255) NOT NULL
	
);

INSERT INTO gallery (description, likes, path)
VALUES ('Photo of a goat taken at Glacier National Park.', 0,'images/goat_small.jpg');

SELECT * FROM "gallery";