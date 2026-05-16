const mongoose=require("mongoose");

const collegeSchema=new mongoose.Schema({

    name:{type:String,required:true},
    code:{type:String,unique:true,required:true},
    departments:{type:Array,required:true},
    url:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    address:{type:String,required:true}
},{timestamps:true});

const collegeModel=mongoose.model("colleges",collegeSchema);

module.exports=collegeModel;