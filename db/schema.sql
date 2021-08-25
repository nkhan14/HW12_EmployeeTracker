DROP DATABASE IF EXISTS s2genomics_db;
CREATE DATABASE s2genomics_db;

USE s2genomics_db;

-- create a table for department information
CREATE TABLE department (
    dept_id INT NOT NULL AUTO_INCREMENT,
    dept_name VARCHAR(30),
    PRIMARY KEY (dept_id)
);

-- create a table for employees
CREATE TABLE employees (
    emp_id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    emp_role_id INT NOT NULL,
    manager_id INT,
    PRIMARY KEY (emp_id),
    FOREIGN KEY (emp_role_id) REFERENCES emp_role(role_id),
    FOREIGN KEY (manager_id) REFERENCES employees(emp_id)
);

-- create a table for employee roles

CREATE TABLE s2_role (
    role_id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DEC(7,2) NOT NULL,
    dept_id INT,
    PRIMARY KEY (role_id),
    FOREIGN KEY (dept_id) REFERENCES department(dept_id)
);

-- used help from online repos to tabulate this particular repo as a guide