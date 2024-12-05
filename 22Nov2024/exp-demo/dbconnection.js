import mongoose from 'mongoose';

//Database Connection  

export default function connectDB()
{
    mongoose.connect("mongodb://localhost:27017/btechpracs")
    .then (()=>{
        console.log("Database Connected")
    })
    .catch((err)=>{
        console.log(err)
})
}