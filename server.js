/**
 * Demo-app med express 
 */

const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs"); // View engine: EJS
app.use(express.static("public")); // Statiska filer

// Route
app.get("/", (req, res) => {
    res.send("Hello from Express!")
});

// Starta
app.listen(port, () => {
    console.log("Server started on port: " + port)
});