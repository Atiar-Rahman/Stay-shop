import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home.jsx/Home';
import SignUp from '../Pages/SignUp/SignUp';
import Login from '../Pages/Login/Login';

const route = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,

        children:[
            {
                path: '/sinup',
                element:<SignUp></SignUp>
            },
            {
                path: '/login',
                element:<Login></Login>
            }
        ]
    }
])

export default route;