/**
 * Demo-app med express 
 */

const express = require("express");
const bodyParser = require("body-parser"); // Möjlighet att läsa in form-data
const app = express();
const port = 3000;
// Global array med lista för kurser
const courseList = [];

app.set("view engine", "ejs"); // View engine: EJS
app.use(express.static("public")); // Statiska filer
app.use(bodyParser.urlencoded({extended: true}));

// Routing
app.get("/", (req, res) => {
    res.render("index", {courseList}); // Startsida och kurslista
});

app.get("/addcourses", (req, res) => {
    res.render("addcourses", {
        errors: [],
        newCode: "",
        newName: "",
        newSyllabus: "",
        newProgression: ""
    })
});
app.post ("/addcourses", (req, res) => {

        // Läs in forumlärdata
        let newCode = req.body.coursecode;
        let newName = req.body.coursename;
        let newSyllabus = req.body.syllabus;
        let newProgression = req.body.progression;

        let errors = [];

        console.log(newCode, newName, newSyllabus, newProgression);
        console.log(req.body);
        console.log("Formuläret mottogs!");

        // Validera input och felmeddelanden
        if (newCode === "") {
            errors.push("Ange korrekt kurskod");
        }
        if (newName === "") {
            errors.push("Ange korrekt kursnamn");
        }
        if (newProgression === "" || newProgression === "Välj progression") {
            errors.push("Ange korrekt progression");
        }
        if (errors.length > 0) {
            // Fel -> visa forumuläret igen med felmeddelande
            return res.render("addcourses", {
                errors,
                newCode,
                newName,
                newProgression,
                newSyllabus
            });
        }

        // Lägg till i arrayen
        courseList.push ({
            coursecode: newCode,
            coursename: newName,
            syllabus: newSyllabus,
            progression: newProgression
        });

        // Skickas till startsidan efter att man fyllt i formulär korrekt
        res.redirect("/", {

            newCode: newCode,
            newName: newName,
            newSyllabus: newSyllabus,
            newProgression: newProgression
        });
});

app.get("/about", (req, res) => {
    res.render("about") // "Om webbplatsen"-sidan
});

// Starta
app.listen(port, () => {
    console.log("Server started on port: " + port)
});