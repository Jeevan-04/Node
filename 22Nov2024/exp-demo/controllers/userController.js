import bcrypt from 'bcryptjs';
import express, { Router } from 'express'
import userModel from '../models/userModel.js';

// api endpoints

const router = express.Router()


// router.post("/",async (req,res)=>{

//     const user = req.body

//     try{

//         let salt = bcrypt.getSaltSync(10);
//         let hash = bcrypt.hashSync(user.password,salt);

//         userpassword = hash 


//         await userModel.create(user)
//         res.status(201).send({message:"User Created"})
//     }
//     catch(err){
//         console.log(err)
//         res.status(500).send({message:"Some Problem"})
//     }
// })


router.post("/", async (req, res) => {
    const user = req.body;

    try {
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(user.password, salt);

        user.password = hash;

        await userModel.create(user);
        res.status(201).send({ message: "User Created" });
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: "Some Problem" });
    }
});



router.put("/:id",async (req,res)=>{
    let id = req.params.id;
    let user = req.body;

    let existingUser = userModel.findById(id)
    // .then((existingUser)=>{
    //     if(existingUser!==null)
    //     {
    //         userModel.findByIdAndUpdate(id,user)
    //         .then(()=>{
    //             res.status(200).send({message:"Updated"})
    //         })
    //         .catch((err)=>{
    //             console.log(err)
    //             res.send({message:"Some Problem"})
    //         })
    //     }
    //     else
    //     {
    //         res.status(404).send({message:"User not Present"})
    //     }
    // })
    if(!existingUser)
    {
        res.status(404).send({message:"User Not Found"})
    }
    // try{
        
    // }
})



router.get("/",(req,res)=>{
    userModel.find()
    .then((data)=>{
        res.send({data})
    })
    .catch((err)=>{
        console.log(err)
        res.send({message:"Some Problem"})
    })
})


router.get("/:id",async (req,res)=>{
    let id = req.params.id
    // userModel.findById(id)
    // .then((data)=>{
    //     res.send(data)
    // })
    // .catch((err)=>{
    //     console.log(err)
    //     res.send({message:"Some Problem"})
    // })

    let user = await userModel.findById(id)

    if(user!==null)
    {
        res.send(user)
    }
    else
    {
        res.statusMessage(404).send({message:"User Not Found with "})
    }
})


router.delete("/:id", (req, res) => {
    let id = req.params.id
    let existingUser = userModel.findById(id)
    .then((existingUser)=>{
        if(existingUser!==null)
        {
            userModel.findByIdAndDelete(id)
            .then(()=>{
                res.status(200).send({message:"Deleted"})
            })
            .catch((err)=>{
                console.log(err)
                res.send({message:"Some Problem"})
            })
        }
        else
        {
            res.status(404).send({message:"User not Present"})
        }
    })
});


export default Router