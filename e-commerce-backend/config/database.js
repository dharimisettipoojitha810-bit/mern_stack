const mongoose=require("mongoose")
//Try and catch block
// const connection=async()=>{
//     try{
//       await mongoose.connect(process.env.MONGODB_URL);
//       console.log("DataBase Connected Sucessfully");

//     } catch (err){
//         console.log("Failed to connect DataBase:",err);

//     }
// }
//then and catch block
const connection=()=>{
    mongoose.connect(process.env.MONGODB_URL).then(()=>{
        console.log("DataBase Connected Successfully")
    }).catch((err)=>{
        console.log("failed to connect DB:",err)
    });

}

module.exports=connection;