import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import Home from "../pages/Home";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import SignUp from "../pages/SignUp";
import AdminPannel from "../pages/AdminPannel";
import AllUsers from "../pages/AllUsers";
import AllProducts from "../pages/AllProducts";

const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children: [
            {
                path : "",
                element : <Home/>
            },
            {
                path : "login",
                element : <Login/>
            },
            {
                path : "forgot-password",
                element : <ForgotPassword/>
            },
            {
                path : "sign-up",
                element : <SignUp/>
            },
            {
                path : "admin-pannel",
                element : <AdminPannel/>,
                children : [
                    {
                        path : "all-users",
                        element : <AllUsers/>
                    },
                    {
                        path : "all-products",
                        element : <AllProducts/>
                    }
                ]
            }
        ]

    }
])

export default router