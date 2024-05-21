import React,{ useState } from 'react'
import axios from 'axios'
import './Signup.css'
const SignupForm = () => {

const [formData,setFormData]=useState({
    name:'',
    username :'',
    password:'',
    confirmPassword:'',
    email:''
})

const handleChange =(e)=>{
    const{name,value}=e.target;
    setFormData({...formData,[name]:value})
}

const handleSubmit = async (e) =>{
    e.preventDefault();
    //call to backend api
   try {
    const response = await axios.post("http://localhost:3000/signup",formData);
    console.log(response.data);
   } catch (error) {
    console.error(error);
   } 


}

  return (
    <div className='container'>
<form onSubmit={handleSubmit} className='form'>

    <div className='title'>
        welcome
    </div>
    <div className='subtitle'>let's create your account</div>
    <div>
        <label htmlFor="name">Name :</label>
        <input
         type="text"
         id ="name"
         name ="name"
         value={formData.name}
         onChange={handleChange} 
        />
    </div>
    <div>
        <label htmlFor="username">username :</label>
        <input
         type="text"
         id ="username"
         name ="username"
         value={formData.username}
         onChange={handleChange} 
        />
    </div>
    <div>
        <label htmlFor="password">password :</label>
        <input
         type="password"
         id ="password"
         name ="password"
         value={formData.password}
         onChange={handleChange} 
        />
    </div>
    <div>
        <label htmlFor="confirmPassword">confirmPassword :</label>
        <input
         type="password"
         id ="confirmPassword"
         name ="confirmPassword"
         value={formData.confirmPassword}
         onChange={handleChange} 
        />
    </div>
    <div>
        <label htmlFor="email">email :</label>
        <input
         type="email"
         id ="email"
         name ="email"
         value={formData.email}
         onChange={handleChange} 
        />
    </div>
    <button type='submit' className='btn' >Submit</button>


</form>
    </div>
  )
}

export default SignupForm