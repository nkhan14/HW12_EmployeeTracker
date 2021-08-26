DROP DATABASE IF EXISTS s2genomics_db;
CREATE DATABASE s2genomics_db;

USE s2genomics_db;

-- create a table for department information
CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

-- create a table for employees
CREATE TABLE employee (
    id INT(10) NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT(10) NOT NULL,
    manager_id INT(10),
    PRIMARY KEY (id)
);

-- create a table for employee roles

CREATE TABLE role (
    id INT(10) NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,2) NOT NULL,
    department_id INT(10) NOT NULL,
    PRIMARY KEY (id)
);

-- used help from online repos to tabulate this particular repo as a guide