// requiring and linking the different packages
var inq = require("inquirer");
var mysql = require("mysql");
var app = require("../app");
var view = require("./view");

// funtion to add in employees
exports.addEmployee = () => {
    view.getAllRoles(function(rolesResults) {
       var roles = [];
       for(var i = 0; i < rolesResults.length; i++) {
           roles.push(rolesResults[i].title);
       }
        var options = [
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
             var roleId = null;
             for(var i= 0; i < rolesResults.length; i++) {
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

