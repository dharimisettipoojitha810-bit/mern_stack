const addStudents = require("../controller/studentController");
const express = require("express");

const router = express.Router();

router.post("/add-student", addStudents);

module.exports = router;