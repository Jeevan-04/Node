import bcryptjs from 'bcryptjs'
import userModel from '../models/userModel.js';
import jwt from 'jsonwebtoken' // payload, metadata, the signature algorithm
import { SECRET_KEY } from '../constant.js';


export async function createUser(req,res){
    let user = req.body;

    let salt = bcryptjs.genSaltSync(10)
    let newPassword = bcryptjs.hashSync(user.password,salt)
    user.password = newPassword

    try{

        await userModel.create(user)
        res.send({message:"User Registered"})
    }
    catch(err)
    {
        console.log(err)
        res.status(500).send({message:"Some Problem"})
    }
}


export async function login(req,res){
    const userCreds = req.body
    console.log(userCreds)

    try{
        let user = await userModel.findOne({username:userCreds.username})
        if(!user)
        {
            res.status(404).send({message:"Username doesn't exist"})
        }
        else
        {
            bcryptjs.compare(userCreds.password, user.password,(err,result)=>{
                if(!err)
                {
                    if(result===true)
                    {
                        let token = jwt.sign({username:user.username},SECRET_KEY)
                        res.send({token:token,message:"Welcome User !!!!!!"})
                    }
                    else{
                        res.send({message:"Password is Incorrect"})
                    }
                }
                else{
                    res.status(500).send({message:"Some Problem"})
                }
            })
        }
    }
    catch(err)
    {
        console.log(err)
        res.status(500).send({message:"Some Problem"})
    }
}




export function testMiddleWare (req,res){
    res.send({message:"Test Success"})
}
