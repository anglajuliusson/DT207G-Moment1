const mysql = require("mysql2");

// Anslutningsinställningar
const db = mysql.createConnection({
    socketPath: "/tmp/mysql.sock",
    user: "root",
    password: "jullan02",
    database: "dt207g_courses"
});

db.connect((err) => {
    if (err) {
        console.error("Connection failed: " + err); // Felmeddelande
        return;
    }
    console.log("Connected to MySQL");
});

// Exportera så att server.js kan använda
module.exports = db;

// SQL-fråga