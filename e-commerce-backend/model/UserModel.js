const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    
    name:{type:String,require:true},
    email:{type:String,require:true,unique:true},
    phone:{type:String,require:true,length:10,unique:true},
    password:{type:String,require:true},
    address:{type:String,require:true},
    city:{type:String,require:true},
    userType:{type:String,require:true,default:"user"},
    state:{type:String,require:true},
    zipCode:{type:String,require:true},


},{timestamps:true})

const userModel=mongoose.model("users",userSchema)

module.exports=userModel;