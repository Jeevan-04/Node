import express from 'express';
import connectDB from './dbconnection.js';
import userRouter from './controllers/userController.js';


connectDB();

const app = express()
app.use(express.json())


app.use("/users",userRouter)



// health check
app.get("/health",(req,res)=>{
    res.send({message:"server health is good !!!"})
})


app.listen(8000,()=>{
    console.log("server is up and running");
})




