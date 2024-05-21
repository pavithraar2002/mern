import express from 'express'
import { getUsers, getUserByUserName,addUser,updateUserById,deleteUser } from '../Controller/userController.js';

const userRouter = express.Router();

userRouter.get('/',getUsers)
userRouter.get('/username/:username',getUserByUserName)
userRouter.post('/',addUser)
userRouter.patch('/:id',updateUserById)
userRouter.delete('/:id',deleteUser)



export default userRouter