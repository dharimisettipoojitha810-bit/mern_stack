const express=require("express")
const app=express();
const env=require("dotenv")
const connection=require("./config/database")
const UserRouter=require("./routes/userRouter");
const prompt=require("./routes/promptRouter");
const ProductRouter=require("./routes/productRouter")
const cors=require("cors");
env.config();
const PORT=process.env.PORT
connection()
app.use(express.json());
app.use(cors())
app.use("/user",UserRouter);
app.use("/ai",prompt)
app.use("/products",ProductRouter)


app.listen(PORT,()=>{
    console.log("server running on :", PORT);
});