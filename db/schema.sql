DROP DATABASE IF EXISTS s2genomics_db;
CREATE DATABASE s2genomics_db;

USE s2genomics_db;

-- create a table for department information
CREATE TABLE department (
    dept_id INT NOT NULL AUTO_INCREMENT,
    dept_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (dept_id)
);

-- create a table for employees
CREATE TABLE employees (
    emp_id INT(10) NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    emp_role_id INT(10) NOT NULL,
    manager_id INT(10),
    PRIMARY KEY (emp_id)
);

-- create a table for employee roles

CREATE TABLE s2_role (
    role_id INT(10) NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DEC(10,2) NOT NULL,
    emp_role_id INT,
    PRIMARY KEY (role_id)
);

-- used help from online repos to tabulate this particular repo as a guide