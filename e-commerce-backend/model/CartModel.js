const mongoose=require("mongoose")

const cartSchema=new mongoose.Schema({
    userId:{type:mongoose.Types.ObjectId, required:true},
    productIds:{type:Array(mongoose.Types.ObjectId), required:true},
    totalPrice:{type:Number, required:true, default:0}
},{timestamps:true})

module.exports =mongoose.model("cart",cartSchema);