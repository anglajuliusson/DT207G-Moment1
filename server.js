/**
 * Demo-app med express 
 */

const express = require("express");
const bodyParser = require("body-parser"); // Möjlighet att läsa in form-data
const app = express();
const port = 3000;

app.set("view engine", "ejs"); // View engine: EJS
app.use(express.static("public")); // Statiska filer
app.use(bodyParser.urlencoded({extended: true}));

// Routing
app.get("/", (req, res) => {
    const courseList = [ // Lista för kurser
        {
            coursename: "Backendutveckling"
        }
    ];
    res.render("index", {courseList}); // Startsida och kurslista
});

app.get("/addcourses", (req, res) => {
    res.render("addcourses") // "Lägg till kurser"-sidan
});
app.post ("/addcourses", (req, res) => {

        // Läs in forumlärdata
        let newCode = req.body.coursecode;
        let newName = req.body.coursename;
        let newSyllabus = req.body.syllabus;
        let newProgression = req.body.progression;

        console.log(newCode, newName, newSyllabus, newProgression);
        console.log(req.body);
        console.log("Formuläret mottogs!");
    res.render("addcourses") 
});

app.get("/about", (req, res) => {
    res.render("about") // "Om webbplatsen"-sidan
});

// Starta
app.listen(port, () => {
    console.log("Server started on port: " + port)
});