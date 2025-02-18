import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Candidate from "../pages/Candidate";
import Hr from "../pages/Hr";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/> ,
        children: [
            {
                path: '',
                element: 
                <Home/>
            }
        ]
    },
    {
        path: '/',
        element: <Candidate/> ,
        children: [
            {
                path: 'candidate',
                element: 
                <Candidate/>
            }
        ]
    },
    {
        path: '/',
        element: <Hr/> ,
        children: [
            {
                path: 'hr',
                element: 
                <Hr/>
            }
        ]
    },
])



export default function Route() {
    return <RouterProvider router={router} />;
  }