import Post from "../Models/postModel.js";
import {filename} from '../upload.js'

const addPost =async (req,res)=>{
    try {
        var postItem={
            image:filename,
            title:req.body.title,
            subtitle:req.body.subtitle,
            desc:req.body.desc

        }
        var post = new Post(postItem)
        await post.save();   
        res.status(200).json(postItem)       

    } catch (error) {
        console.log(error)
        res.status(500).json({error:' internal server error'})

        
    }
}


export {addPost}