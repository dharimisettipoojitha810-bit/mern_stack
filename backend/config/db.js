const mongoose=require("mongoose");

const connection=async()=>{
    try{
  await mongoose.connect("mongodb://localhost:27017/data_base");
    console.log("DB connected Successfully 😎")}
catch{
    console.log("Failed to connect DB 😊")
}};

module.exports=connection;