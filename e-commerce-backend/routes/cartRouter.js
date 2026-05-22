const express=require("express");
const router=express.Router();

const {addToCart}=require("../controller/CartController")
const isUser=require("../middleware/authUser")

router.post("/add-cart",addToCart);

module.exports=router;