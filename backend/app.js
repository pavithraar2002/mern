import express from 'express'
import cors from 'cors'
import userRouter from './Router/userRouter.js'
import employeeRouter from './Router/employeeRouter.js'
import postRouter from './Router/postRouter.js'
const app = express()

app.use(express.json())
app.use(cors())
app.use('/users',userRouter)
app.use('/employees',employeeRouter)
app.use('/posts',postRouter)




app.listen(3000,()=>{
    console.log("listening on port 3000");
})
