import mongoose from "mongoose";

export default function connectDB()
{
    mongoose.connect("mongodb://localhost:27017/hola")
    .then(()=>{
        console.log("Database Up and Running")
    })
    .catch((err)=>{
        console.log(err)
    })
}