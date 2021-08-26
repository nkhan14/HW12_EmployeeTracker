-- creating department categories
SELECT * FROM s2genomics_db.department;

INSERT INTO department (name) VALUES ('Management'), ('Administration'), ('In Laboratory Personnel'), ('Sales') ;

-- determining the different roles
SELECT * FROM s2genomics_db.role;

INSERT INTO role (id, title, salary, department_id) VALUES
(1, 'Chief Executive Officer', 200000.00, 1),
(2, 'Chief Operations Officer', 175000.00, 1),
(3, 'Sales Manager', 150000.00, 1),
(4, 'Field Applications Scientist', 110000.00, 3),
(5, 'Lead Research Associate', 90000.00, 3),
(6, 'Research Associate', 70000.00, 3),
(7, 'Administration Lead', 70000.00, 2),
(8, 'Administration Employee', 50000.00, 2);

-- initial employee data
SELECT * FROM s2genomics_db.employee;

INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES
(1, 'Stevan', 'Jovanovich', 1, 1),
(2, 'John', 'Bashkins', 2, 2),
(3, 'Austin', 'Dunyack', 3, 3),
(4, 'Nathan', 'Pereira', 4, NULL),
(5, 'Nabiha', 'Khan', 4, NULL),
(6, 'Danielle', 'Meyer', 5, NULL),
(7, 'Trish', 'Silva', 7, NULL);

-- I my NOT need this?? Lets see??