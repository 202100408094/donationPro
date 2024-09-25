const mysql = require("mysql");
const db = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "xxx",
    database: "crowdfunding_db",
    multipleStatements: true
})

module.exports = db;