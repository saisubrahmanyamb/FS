// routes/studentsRoutes.js

const express = require("express");
const router = express.Router();
const Student = require("../modules/Students");
const path = require("path");

// Serve index.html
router.get("/", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname, "../public") });
});

// Handle student registration
router.post("/register", async (req, res) => {
  try {
    const { name, age, course, email, phone } = req.body;

    // Optional: Validate input before saving
    if (!name || !age || !course || !email || !phone) {
      return res.status(400).json({
        status: "error",
        message: "All fields are required.",
      });
    }

    await Student.create({ name, age, course, email, phone });

    res.status(201).json({
      status: "success",
      message: "Student registered successfully",
    });
  } catch (err) {
    console.error("Error registering student:", err);
    res.status(500).json({
      status: "error",
      message: "Failed to register student",
    });
  }
});

// Get all registered students
router.get("/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json({
      status: "success",
      data: students,
    });
  } catch (err) {
    console.error("Error fetching students:", err);
    res.status(500).json({
      status: "error",
      message: "Failed to fetch students",
    });
  }
});

module.exports = router;
