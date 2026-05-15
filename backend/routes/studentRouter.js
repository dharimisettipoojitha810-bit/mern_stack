const addStudent=require("../controller/studentController");
const express=require("express")
const router=express.Router();

router.post("/add-student",addStudent);




module.exports=router;