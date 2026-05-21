const sendPrompt=require("../controller/promptController");
const express=require("express")
const router=express.Router()


router.post("/prompt", sendPrompt);

module.exports=router;