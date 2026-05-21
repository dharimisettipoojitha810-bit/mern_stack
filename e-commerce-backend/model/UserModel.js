const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
     name: {type:String, required:true},
    email: {type:String, required:true, unique:true},
    phone: {type:Number, required:true,length:10,unique:true},
    password: {type:String, required:true},
    address: {type:String, required:true},
    city: {type:String, required:true},
    userType: {type:String, required:true, default:"user"},
    state: {type:String, required:true},
    zipCode: {type:Number, required:true},
},{timestamps:true});

const userModel=mongoose.model("users",userSchema);

module.exports=userModel;