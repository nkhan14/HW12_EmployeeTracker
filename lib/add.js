// requiring and linking the different packages (adding to all - some may not be applicable)
const express = require("express");
const inq = require("inquirer");
const mysql = require("mysql");
const app = require("../app");
const view = require("./view");

// old school connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Pass@20237884",
    database: "s2genomics_db"
});

// funtion to add in employees
exports.addEmployee = () => {
    view.getAllRoles(function(rolesResults) {
       const roles = [];
       for(let i = 0; i < rolesResults.length; i++) {
           roles.push(rolesResults[i].title);
       }
        const options = [
         {
             type: "input",
             message: "Employee First Name",
             name: "firstName",
             default: "Emily"
         },
         {
             type: "input",
             message: "Employee Last Name",
             name: "lastName",
             default: "Rendleman"
         },
         {
             type: "list",
             message: "Employee Role",
             name: "role",
             choices: roles
         }
         ];
 
         inq.prompt(options)
         .then((answers) => {
             const roleId = null;
             for(let i= 0; i < rolesResults.length; i++) {
                 if(rolesResults[i].title === answers.role) {
                     roleId = rolesResults[i].role_id
                 }
             }
             connection.query("INSERT INTO employees SET ?",
                 {
                     first_name: answers.firstName,
                     last_name: answers.lastName,
                     emp_role_id: roleId
                 },
             function(err,results) {
                 if(err) throw err;
                 console.log("Successfully added " + answers.firstName + " " + answers.lastName );
                 app.start();
             });
         });
     });
 };

//  lets see how this works (fingers crossed!)... also these comments are made to keep me sane, so please dont mind them

