import mongoose from 'mongoose';

// schema for users

const userSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    age:{type:Number,required:true},
    city:{type:String,required:true}
},
{timestamps:true})

const userModel = mongoose.model('users',userSchema)

export default userModel

