// requiring and linking the different packages (adding to all - some may not be applicable)
const mysql = require("mysql");
const inq = require("inquirer");
const view = require("./lib/view");
const add = require("./lib/add");
const update = require("./lib/update");

// old school connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Pass@20237884",
    database: "s2genomics_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    exports.start();
  });
  
  exports.start = () => {
      inq.prompt([
          {
              type: "list",
              message: "What would you like to do?",
              name: "choice",
              choices: [
                  "View All Employees",
                  "Add Employee",
                  "Update Employee Role",
                  "EXIT"                
              ]
          }
      ])
      .then(function(answer) {
        if(answer.choice === "View All Employees") {
          view.viewAllEmployees();
        }
        else if(answer.choice === "Add Employee") {
          add.addEmployee();
        }      
        else if(answer.choice === "Update Employee Role") {
          update.updateRole();
        }
        else if(answer.choice === "EXIT") {
          connection.end();
          return
        }
      });
      
  };