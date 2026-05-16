const e=require("express")
const Students=require("../model/StudentModel")

const addStudents = async (req, res) => {

    try {

        const { name, rollno, branch, phone, email, address } = req.body;

        const newStudent = await Students.create({
            name,
            rollno,
            branch,
            phone,
            email,
            address
        });

        res.status(200).json({
            message: "Students added successfully",
            student: newStudent
        });

    } catch (e) {

        console.log(e);

        res.status(500).json({
            message: "Failed to add Students",
            error: e.message
        });
    }
};

module.exports = addStudents;