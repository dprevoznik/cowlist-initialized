DROP DATABASE IF EXISTS farm;
CREATE DATABASE farm;
USE farm;

DROP TABLE IF EXISTS cows;

CREATE TABLE cows (
    id int AUTO_INCREMENT,
    name VARCHAR(250),
    description VARCHAR(250),
    PRIMARY KEY (id)
);

-- mysql -u root < schema.sql to start.
-- INSERT INTO cows (name, description) VALUES ('daisy', 'red hair');