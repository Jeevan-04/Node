import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true," ! Name is Required"]
    },
    username:{
        type:String,
        required:true,unique:[true,"! UserName already Exists"],
        min:[4,"! Username too short"]
    },
    password:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        enum:["Male","Female"]
    },
    people:[{type:mongoose.Schema.Types.ObjectId,ref:'users'}],
    profilePic:{
        type:String,
        default:"https://static.vecteezy.com/system/resources/previews/023/402/465/non_2x/man-avatar-free-vector.jpg"
    }
},{timestamps:true})


const userModel = mongoose.model("users",userSchema)

export default userModel