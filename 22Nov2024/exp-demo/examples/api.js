// // const express = require('express');
import express from 'express';

// import {a, doSomething , nums, obj} from './data.js'

// import connect from './data.js'

// doSomething()

// console.log(nums)

// console.log(a)

// console.log(obj)

// let dummyProducts = [
//     {id:1,name:"Bhagawad gita",author:"veda vyasa"},
//     {id:2,name:"Ramayana",author:"valmiki"},
//     {id:3,name:"Lilavati",author:"Bhaskaracharya"}
// ]

const app = express()

app.use(doCheck)

// app.post("/products",doCheck,(req,res)=>{
//     res.send("Product Created")
//     // res.send({status:true,message:"post request Success"})
// })


app.post("/products",express.json(), (req,res)=>{
    
    console.log(req.body)
    res.send("Product Created")
    // res.send({status:true,message:"post request Success"})
})


//A simple middleware
function doCheck(req,res,next)
{
    if(req.headers.authorization!=undefined)
    {
        if(req.headers.authorization==="abc")
        {
            next()
            return
        }
        else
        {
            res.send("you are not allowed")
        }
    }
    res.send("you are not allowed")
}


app.get("/products",(req,res)=>{
    console.log(req.params.id)
    res.send(dummyProducts)
    res.send({status:true,message:"get request Success"})
})

app.get("/products/:id",(req,res)=>{

    let product = dummyProducts.find((p)=>{
        return p.id === Number(req.params.id)
    })
    console.log(req.params.id)
    res.send(product)
    // res.send({status:true,message:"get request Success"})
})


app.get("/users",(req,res)=>{
    res.send({status:true,message:"get request Success"})
})

app.delete("/items/:id",(req,res)=>{
    console.log(req.params.id)
    res.send({status:true,message:"Delete request Success"})
})

app.put("/todos/:id",(req,res)=>{
    console.log(req.params.id)
    res.send({status:true,message:"put request Success"})
})

app.patch("/cart/:id",(req,res)=>{
    console.log(req.params.id)
    res.send({status:true,message:"patch request Success"})
})



app.listen(8000,()=>{
    console.log("server is running")
})
