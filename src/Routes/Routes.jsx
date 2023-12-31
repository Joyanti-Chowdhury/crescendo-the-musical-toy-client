import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddToy from "../Pages/AddToy/AddToy";
import AllToy from "../Pages/AllToy/AllToy";
import Mytoy from "../Pages/MyToy/Mytoy";
import Blog from "../Pages/Blog/Blog";
import Error from "../Pages/Error/Error";
import PrivateRoutes from "./PrivateRoutes";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
           
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/addtoy',
            element:<PrivateRoutes><AddToy></AddToy></PrivateRoutes>
        },
        {
            path:'/alltoys',
            element:<AllToy></AllToy>
            
        },
        {
            path:'/mytoys',
            element:<PrivateRoutes><Mytoy></Mytoy></PrivateRoutes>
        },
        {
            path:'/viewdetails',
            element:<PrivateRoutes><ViewDetails></ViewDetails></PrivateRoutes>
        },

        {
            path:'/blog',
            element:<Blog></Blog>
        },
      
      ]
      
    },
    {
      path:'*',
      element:<Error></Error>
  }
  ]);



  export default router;