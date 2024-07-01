import React, { useState ,useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import { FaBarsStaggered, FaXmark } from 'react-icons/fa6';
import {  signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase.config';

const Navbar = () => {

     const navigate =useNavigate()

     const handleLogout = () => {               
        signOut(auth).then(() => {
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {
        });
    }

    const [isMenuOpen, setIsMenuOpen]= useState(false);
    const handleMenuToggler = ()=>{
        setIsMenuOpen(!isMenuOpen);
    };
    const [userAuthenticated, setUserAuthenticated] = useState(false);
    const navItems=[
        {path: "/", title: "Apply for Jobs"},
        {path: "/my-job", title: "My Jobs"},
        {path: "/post-job", title: "Post A Job"},
    ]
    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserAuthenticated(true);
            } else {
                setUserAuthenticated(false);
            }
        });
    }, []);


  return (
   <header className='max-w-screen-2xl container mx-auto xl:24 px-4'>
    <nav className='flex justify-between items-center py-6'>
        <a href="/" className='flex items-center gap-2  text-2xl text-black'>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <circle cx="12.5143" cy="12.5143" r="12.0143" fill="#3575E2" fillOpacity="0.4"/>
        <circle cx="17.4857" cy="17.4857" r="12.0143" fill="#3575E2"/>
        </svg><span>Job Portal</span></a>
        
        <ul className='hidden md:flex gap-12'>
            {  navItems.map(({path, title}) =>(
                    <li key={path} className='text-base text-primary'>
                        <NavLink to={path} className={({ isActive}) =>   ( isActive? "active" : '')}   >
                    {title}
                  </NavLink>
                    </li>
                ))}
            
        </ul>

        <div className='text-base text-primary font-medium space-x-5 hidden lg:block'>
                    {userAuthenticated ? (
                        <button onClick={handleLogout} className='py-2 px-2 border rounded'>
                            Log Out
                        </button>
                    ) : (
                        <>
                            <NavLink to='/login' className='py-2 px-2 border rounded'>
                                Log In
                            </NavLink>
                            <NavLink to='/signup' className='py-2 px-2 border rounded bg-blue text-white'>
                                Sign Up
                            </NavLink>
                        </>
                    )}
                </div>

                {/*nav for mobile*/ }
                <div className='md:hidden block'>
                    <button onClick={handleMenuToggler}>
                        {
                            isMenuOpen ? <FaXmark className='w-5 h-5 text-primary'/> :<FaBarsStaggered className='w-5 h-5 text-primary'/>
                        } 
                    </button>
                </div>
    </nav>
    
    <div className={`px-4 bg-black py-5 rounded-sm ${isMenuOpen ? '' : "hidden" }`}>
        <ul>
        {  navItems.map(({path, title}) =>(
                    <li key={path} className='text-base text-white first:text-white py-1'>
                        <NavLink
                    to={path}
                    className={({ isActive}) =>
                     ( isActive? "active" : '')}   
                  >
                    {title}
                  </NavLink>
                    </li>
                ))}
            <li className='text-white py-1'><NavLink to="/login" className="py-2 px-2  rounded">LOG IN</NavLink></li>
        </ul>
    </div>
   </header>
  );
};
export default Navbar
