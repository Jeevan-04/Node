import express from 'express';
import connectDB from "./dbconnection.js";
import productRouter from "./controllers/productController.js"


connectDB();


const app = express()
app.use(express.json())


// health check
app.get("/health",(req,res)=>{
    res.send({message:"server health is good !!!"})
})

app.use("/products",productRouter)


app.listen(8000,()=>{
    console.log("server is up and running");
})
