const express=require("express")
const {register,login,getUserBasedOnID,getAllUsers,updateProfile,forgetPassword} =require("../controller/userController")
const router=express.Router()


router.post("/register",register);
router.post("/login",login);
router.get("/get-users",getAllUsers);
router.get("/get-user/:id",getUserBasedOnID);
router.patch("/updateprofile",updateProfile);
router.patch("forget-password",forgetPassword);
module.exports=router;