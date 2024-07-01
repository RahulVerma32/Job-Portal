import React, {useState} from 'react'
import "./login.css";
import { auth } from '../../firebase/firebase.config'
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { NavLink, useNavigate } from 'react-router-dom'

const Login = () => {


  const navigate =useNavigate()

  const handleSubmit =(e) =>{
    e.preventDefault()
    const email =e.target.email.value
    const password=e.target.password.value

    signInWithEmailAndPassword(auth,email,password) .then((userCredential) => {
      const user = userCredential.user;
      console.log(user.email, 'authData'); 
      navigate('/');
  })
  .catch((error) => {
      console.error('Login error:', error.message);
  });
  };
  
  return (
  
    <div className='main'>
      <h1 className='sign text-center text-3xl'>Welecome Back</h1>
      <form className='form1' onSubmit={(e)=>handleSubmit(e)}>
        
        <input className='un text-center mt-7'  type='text' placeholder='Email' name='email'/>
        <input className='pass'  type='text' placeholder='Password' name='password'/>
        <button  className='button1 text-center'>Log In</button>
        </form>
        
        <p className="text-center mt-4 text-cyan-800">
                            No account yet? {' '}
                            <NavLink to="/signup" className='l'>
                                Sign up
                            </NavLink>
                        </p>
        </div>   
  
  );
};
export default Login
 