// requiring and linking the different packages
var inq = require("inquirer");
var mysql = require("mysql");
var app = require("../app");
var view = require("./view");

// setting up a connection for mysql workbench
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Pass@20237884",
    database: "s2genomics_db"
});


