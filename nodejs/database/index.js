const mysql = require("mysql");
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "xxx",
    database: "crowdfunding_db",
    multipleStatements: true
})

module.exports = db;
