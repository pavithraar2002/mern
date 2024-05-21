import React,{useState} from 'react'
import axios from 'axios'
import './newblog.css'

const Newblog = () => {

    const [image,setImage]=useState(null)
    const [title,setTitle] = useState('')
    const [subtitle,setSubtitle] = useState('')
    const [desc,setDesc] = useState('')

    const handleImageChange = (e)=>{
        setImage(e.target.files[0]);
    }

    const handleSubmit =async(e)=>{
        e.preventDefault();
        const formData = new FormData()
        formData.append('image',image);
        formData.append('title',title);
        formData.append('subtitle',subtitle);
        formData.append('desc',desc);
        // console.log(formData);
        try {
            const response = await axios.post("http://localhost:3000/posts",
                formData,{
                    headers:{
                        'Content-Type':'multipart/form-data'
                    }
                } 
            )
            console.log(response);
        } catch (error) {
            console.log(error);
        }

    }

  return (
    <div className='blog-container'>
        <form className='form' onSubmit={handleSubmit}>
            <div className='subtitle'>Create a New Post </div>
            <div>
                <label htmlFor="image"> Blog Image</label>
                <input type="file"
                       id='image'
                       name='image'
                       onChange={handleImageChange}
                       required
                 />

            </div>
            <div>
                <label htmlFor="title"> Title: </label>
                <input type="text"
                       id='title'
                       name='title'
                       value={title}
                       onChange={(e)=>setTitle(e.target.value)}
                       required
                 />
            </div>
            <div>
            <label htmlFor="subtitle"> Subtitle:</label>
                <input type="text"
                       id='subtitle'
                       name='subtitle'
                       value={subtitle}
                       onChange={(e)=>setSubtitle(e.target.value)}
                       required
                 />
            </div>
            <div>
            <label htmlFor="desc"> Description:</label>
                <input type="text"
                       id='desc'
                       name='desc'
                       value={desc}
                       onChange={(e)=>setDesc(e.target.value)}
                       required
                 />
            </div>
            <button className='btn' type='submit' >Submit</button>

        </form>

    </div>
  )
}

export default Newblog