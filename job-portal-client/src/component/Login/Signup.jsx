import React from 'react'
import { NavLink } from 'react-router-dom'
import { auth } from '../../firebase/firebase.config'
import { createUserWithEmailAndPassword} from "firebase/auth"
import {useNavigate} from "react-router-dom"

const Signup = () => {

  const navigate =useNavigate()

  const handleSubmit =(e) =>{
    e.preventDefault()
    const email =e.target.email.value
    const password=e.target.password.value

    createUserWithEmailAndPassword(auth,email,password).then(data=>{
      console.log(data,"authData")
      navigate("/")
    })
  }

  return (
    <div className='flex Login mt-28'>
        <div className='item'>
        <h1>Create an Account</h1>
      <form className='form1' onSubmit={(e)=>handleSubmit(e)}>
        <label></label>
        <input type='text' className='input1' placeholder='Email' name='email'/>
        <input type='text' className='input1' placeholder='Password' name='password'/>
        <button className='button1'>Sign Up</button>    
      </form>
      <p>
                        Already have an account?{' '}
                        <NavLink to="/login" >
                            Log in
                        </NavLink>
                    </p>   
       </div>  
    </div>
  )
}

export default Signup
