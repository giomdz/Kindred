const express = require("express");

const app = express();

app.use(express.json());

const PORT = 3000;

app.get("/", (req, res) => {
    res.json({ message: "Kindred API is running!" });
});

const volunteers = [
    { id: 1, name: "G", skills: ["Design", "Outreach"] },
    { id: 2, name: "D", skills: ["Programming"] }
];

app.get("/api/volunteers", (req, res) => {
    res.json(volunteers);
});

app.post("/api/volunteers", (req, res) => {
    const newVolunteer = {
        id: volunteers.length + 1,
        name: req.body.name,
        skills: req.body.skills
    };

    volunteers.push(newVolunteer);

    res.status(201).json(newVolunteer);
});

app.listen(PORT, () => {
    console.log('Kindred server running on port ${PORT}');
});