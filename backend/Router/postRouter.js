import express from 'express'
import { upload } from '../upload.js'
import { addPost } from '../Controller/postController.js'

const postRouter = express.Router()


postRouter.post('/',upload.single('image'), addPost)

export default postRouter