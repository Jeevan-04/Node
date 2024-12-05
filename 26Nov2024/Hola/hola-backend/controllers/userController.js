import userModel from '../models/userModel.js';

export async function searchByUsername (req,res){
    const username = req.params.username;

    try{
        let users = await userModel.find({username:{$regex:username,$options:'i'}})
        res.send(users)
    }
    catch(err)
    {
        console.log(err)
        res.status(500).send({message:"Some Problem"})
    }
}