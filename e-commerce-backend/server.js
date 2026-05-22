const express=require("express")
const app=express();
const cors=require("cors");
app.use(cors())
const env=require("dotenv")
env.config();
app.use(express.json());

const connection=require("./config/database")

const UserRouter=require("./routes/userRouter");
app.use("/user",UserRouter);
const prompt=require("./routes/promptRouter");
app.use("/ai",prompt)
const ProductRouter=require("./routes/productRouter")
app.use("/products",ProductRouter)

const cartRouter=require("./routes/cartRouter");
app.use("/cart",cartRouter);


const PORT=process.env.PORT
connection()
app.listen(PORT,()=>{
    console.log("server running on :", PORT);
});