
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar'
import {ToastContainer} from 'react-toastify'
function App() {
  

  return (
    <>
    <Navbar/>
     <Outlet/>
      <ToastContainer/>
    </>
  )
}

export default App
