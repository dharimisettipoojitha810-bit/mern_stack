const express=require("express")
const app=express();
const env=require("dotenv")
const connection=require("./config/database")
const UserRouter=require("./routes/userRouter")
env.config();
connection()
app.use(express.json());
app.use("/user",UserRouter)
const PORT=process.env.PORT
app.listen(PORT,()=>{
    console.log("server running on :",PORT);
});
 
