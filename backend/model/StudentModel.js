const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name:{type:String,required:true},
    rollno:{type:String,unique:true,required:true},
    branch:{type:String,required:true},

    phone:{
        type:String,
        required:true,
        unique:true,
        minlength:10,
        maxlength:10
    },

    email:{type:String,required:true,unique:true},
    address:{type:String,required:true}
});

const studentModel = mongoose.model("students", studentSchema);

module.exports = studentModel;