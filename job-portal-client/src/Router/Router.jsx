import {createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Login from "../component/Login/Login";
import Signup from "../component/Login/Signup";
import CreateJob from "../Pages/CreateJob";
import MyJobs from "../Pages/MyJobs";
import UpdateJobs from "../Pages/UpdateJobs";
const router =createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {path:"/",
            element: <Home/>
            },  
            {
                path: "/post-job",
                element: <CreateJob/>
            },
            {
                path: "/my-job",
                element: <MyJobs/>
            },
            {
                path: "edit-jobs/:id",
                element: <UpdateJobs/>,
                loader: ({params}) =>fetch(`http://localhost:5000/all-jobs/${params.id}`)
            },
        ],
    },
    {
        path: "/login",
        element: <Login/>,
        
    },
    {
        path: "/signup",
        element:<Signup/>
    }
 
]);
export default router;