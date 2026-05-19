const express=require("express")
//the package which we are calling must be saved in an variable
const app=express();
//to start the server -2 parameters:port,
const env=require("dotenv")
const connection=require("./config/database")
const UserRouter=require("./routes/userRouter")
const cros=require("cors")
const prompt=require("./routes/promptRouter")
app.use(cros())
env.config();
connection()
app.use(express.json());
app.use("/user",UserRouter)
app.use("/ai",prompt)
const PORT=process.env.PORT
app.listen(PORT,()=>{
    console.log("server running on :",PORT);
});
 
