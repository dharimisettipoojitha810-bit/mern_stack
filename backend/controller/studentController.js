const Students=require("../model/StudentModel")
//add student
const addStudent=(req,res)=>{
  try{

    const{name, rollNo, branch , phone, email, address }=req.body;
  const newStudent={
    name:name,
    rollNo:rollNo,
    branch:branch,
    phone:phone,
    email:email,
    address:address,
  };
  Students.insertOne(newStudent);
  res.status(200).json({message:"Student Added Sucessfully"});

} catch (e) {
    res.status(500).json({message:"failde to add the student"})
    console.log(err);


  }
}
//get all students
//getstudent based on ID
//delete student 
//update student details
//update only phoneno

module.exports=addStudent