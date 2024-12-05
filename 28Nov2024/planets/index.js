import express from 'express';
import ConnectDB from './connectdb.js';
import planetRouter from './routes/planetRouter.js'

ConnectDB()
const app = express()


app.use(express.json())
app.use("/",planetRouter)



app.get('/health',(req,res)=>{
    res.send({message:"its working !!!"})
})

app.listen(6500,()=>{
    console.log("Server is Up")
})