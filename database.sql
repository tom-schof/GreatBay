DROP DATABASE IF EXISTS greatbayDB;
CREATE DATABASE greatbayDB;

USE greatbayDB;

CREATE TABLE item (
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  name VARCHAR(30) NOT NULL,
  bid INTEGER(11) NOT NULL,
  highest_bidder INTEGER(11), -- this will be the user id
  PRIMARY KEY (id)
);

CREATE TABLE user (
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  name VARCHAR(30) NOT NULL,
  password VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

-- Creates new rows containing data in all named columns --
INSERT INTO people (name, bid)
VALUES ("French Classes", 100), ("Spanish Classes", 100), 
("Private Tour of Paris", 400), ("Private Tour of Madrid", 400);


