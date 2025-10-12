// app.js

const express = require("express");
const path = require("path");
const studentsRoutes = require("./routes/StudentsRoutes");

const app = express();

// Required middleware to parse form and JSON data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files (like index.html, CSS, JS) from public folder
app.use(express.static(path.join(__dirname, "public")));

// Use your students routes
app.use("/", studentsRoutes);

module.exports = app;
