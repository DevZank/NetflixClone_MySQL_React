const mysql = require("mysql");

const Connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "moviescontroll",
});

module.exports = Connection;
