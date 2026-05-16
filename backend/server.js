
const express = require("express");
const app = express();
const PORT = 5000;

const connection = require("./config/db");

app.use(express.json());

connection();

const studentRouter = require("./routes/studentRouter");

app.use("/students", studentRouter);

const collegeRouter = require("./routes/collegeRouter");

app.use("/colleges", collegeRouter)

app.listen(PORT, () => {
    console.log("server running on port", PORT);
});