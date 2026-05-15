const { type } = require("express/lib/response");
const mongoose=require("mongoose");

const studentSchema=new mongoose.Schema({
    name:{type:String,require:true},
    rollNo:{type:String,unique:true,require:true},
    branch:{type:String, require:true},
    phone:{type:Number, require:true, unique:true,length:10},
    email:{type:String,  require:true, unique:true},
    address:{type:String, require:true}
    


})
const studentModel=mongoose.model("students",studentSchema)
module.export=studentModel;