-- creating department categories
INSERT INTO department (dept_name) VALUES ('Administration'), ('In House Laboratory'), ('Management');

-- determining the different roles
INSERT INTO s2_role (title, salary, dept_id) VALUES
('Chief Executive Officer', 200000.00, 3),
('Chief Operations Officer', 175000.00, 3),
('Sales Manager', 150000.00, 3),
('Field Applications Scientist', 110000.00, 2),
('Lead Research Associate', 90000.00, 2),
('Research Associate', 70000.00, 2),
('Administration Lead', 70000.00, 1),
('Administration Employee', 50000.00, 1);

-- initial employee data
INSERT INTO employees (first_name, last_name, emp_role_id, manager_id) VALUES
('Stevan', 'Jovanovich', 1, 1),
('John', 'Bashkins', 2, 2),
('Austin', 'Dunyack', 3, 3),
('Nathan', 'Pereira', 4, NULL),
('Nabiha', 'Khan', 5, NULL),
('Danielle', 'Meyer', 6, NULL),
('Trish', 'Silva', 7, NULL);