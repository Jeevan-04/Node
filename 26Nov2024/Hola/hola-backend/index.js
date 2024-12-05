import express from 'express'
import connectDB from './dbConnection.js'
import authRouter from './routes/authRouter.js'
import chatRouter from './routes/chatRouter.js'
import authMiddleware from './middleware/authmiddleware.js'
import userRouter from './routes/userRouter.js'
import cors from'cors'


connectDB()

const app = express()

// res.writeHead({"Access-Control-Allow-Origin"})
app.use(cors())


// inbuit middlewares\
app.use(express.json())



// Routing
app.use("/auth",authRouter)

app.use(authMiddleware)


app.use("/users",userRouter)
app.use("/chat",chatRouter)





app.get('/health',(req,res)=>{
    res.send({message:"Server Running good !!!"})
})




app.listen(8000,()=>{
    console.log("Server is Up")
})