const {addCollege,getAllColleges,deleteCollege,getCollegeBasedOnId,updateCollegeDetails, updateEmail} = require("../controller/CollegeController")

const express=require("express");
const router = express.Router()

router.post("/add-college",addCollege);
router.get("/get-college",getAllColleges);
router.delete("/delete-college/:id",deleteCollege);
router.get("/get-college/:id",getCollegeBasedOnId);
router.put("update-college/:id",updateCollegeDetails)
router.update("update-Email/:id",updateEmail)

module.exports=router;