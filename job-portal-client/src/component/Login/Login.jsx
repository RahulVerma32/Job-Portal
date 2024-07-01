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
  <div className='Login flex mt-32' >
    <div className='item'>
      <h1>Welecome Back</h1>
      <form className='form1' onSubmit={(e)=>handleSubmit(e)}>
        <input className='input1'  type='text' placeholder='Email' name='email'/>
        <input className='input1'  type='text' placeholder='Password' name='password'/>
        <button  className='button1'>Log In</button>
        </form>
        
        <p className="text-sm text-white text-center">
                            No account yet? {' '}
                            <NavLink to="/signup">
                                Sign up
                            </NavLink>
                        </p>
        </div>   
  </div>
  );
};
export default Login
 