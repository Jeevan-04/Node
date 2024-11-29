import mongoose from "mongoose";

export default function ConnectDB()
{
    mongoose.connect("mongodb://localhost:27017/btechpracs")
    .then(()=>{
        console.log("Database is Up and Running")
    })
    .catch((err)=>{
        console.log(err)
    })
}