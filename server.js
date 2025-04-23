/**
 * Demo-app med express 
 */

const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs"); // View engine: EJS
app.use(express.static("public")); // Statiska filer

// Routing
app.get("/", (req, res) => {
    res.render("index") // Startsida
});

app.get("/addcourses", (req, res) => {
    res.render("addcourses") // "Lägg till kurser"-sidan
});

app.get("/about", (req, res) => {
    res.render("about") // "Om webbplatsen"-sidan
});

// Starta
app.listen(port, () => {
    console.log("Server started on port: " + port)
});