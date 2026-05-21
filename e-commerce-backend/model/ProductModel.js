const mongoose=require("mongoose")


const productSchema=new mongoose.Schema({
    name:{type:String, required:true},
    price:{type:Number, required:true},
    description:{type:String, required:true},
    ratings:{type:String, required:true, default:""},
    imageSrc:{type:String, required:true},
    about:{type:String, required:true},
    reviews:{type:Array, default:[]},
},{timestamps:true})

module.exports=mongoose.model("products",productSchema);