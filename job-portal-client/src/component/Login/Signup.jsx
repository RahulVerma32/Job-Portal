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
      
        <div className=' main'>
        <p className='sign text-center text-3xl'>Create an Account</p>
      <form className='form1' onSubmit={(e)=>handleSubmit(e)}>
        
        <input type='text' className='un text-center mt-7' placeholder='Email' name='email'/>
        <input type='text' className='pass' placeholder='Password' name='password'/>
        <button className='button1 text-center'>Sign Up</button>    
      </form>
      <p className='text-center mt-4'>
                        Already have an account?{' '}
                        <NavLink to="/login" className='l' >
                            Log in
                        </NavLink>
                    </p>   
       </div>  
      
    
  )
}

export default Signup
