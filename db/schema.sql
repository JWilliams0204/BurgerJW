-- if the burger_DB already exists it will be dropped
DROP DATABASE IF EXISTS burgers_DB;
CREATE DATABASE burgers_DB;
USE burgers_DB;
-- created the burgers table
CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(100) NOT NULL,
  devoured VARCHAR(45) TRUE,
  
  PRIMARY KEY (id)
);