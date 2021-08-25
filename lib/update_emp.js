// requiring and linking the different packages
const express = require("express");
const inq = require("inquirer");
const mysql = require("mysql");
const app = require("../app");
const view = require("./view");

// function to update employee
exports.updateRole = () => {
    view.getAllEmployees(function (employeeResults) {
        console.log("test here:");
        console.log(employeeResults);
        const employees = [];
        for (let i = 0; i < employeeResults.length; i++) {
            const fullName = {
                name: employeeResults[i].first_name + ' ' + employeeResults[i].last_name,
                value: {
                    id: employeeResults[i].emp_id,
                    firstname: employeeResults[i].first_name,
                    lastname: employeeResults[i].last_name
                }
            };

            employees.push(fullName)
        };

        inq.prompt([
            {
                type: "list",
                message: "Which employee would you like to update?",
                name: "employee",
                choices: employees
            }
        ]).then((answers) => {
            view.getAllRoles(function (rolesResults) {
                const roles = [];
                console.log(answers.employee);

                for (let i = 0; i < rolesResults.length; i++) {
                    const fullRole = {
                        name: rolesResults[i].title,
                        value: {
                            id: rolesResults[i].role_id,
                            role: rolesResults[i].title,
                        }
                    }
                    roles.push(fullRole);
                };

                inq.prompt([
                    {
                        type: "list",
                        message: `Which role would you like to update ${answers.employee.firstname} to?`,
                        name: "role",
                        choices: roles
                    }
                ]).then((results) => {
                    console.log("results...")
                    console.log(results.role)
                    connection.query("UPDATE employees SET emp_role_id = ? WHERE emp_id = ?",[results.role.id, answers.employee.id],function (err, results) {
                        if (err) throw err;
                        console.log("Successfully updated " + answers.employee.id);
                        app.start();
                    })
                });
            });
        });
    });
};