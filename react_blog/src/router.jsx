// src/router.jsx
import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import DefaultLayout from './component/DefaultLayout';
import GuestLayout from './component/GuestLayout';
import Dashboard from './views/Dashboard';
import Posts from './views/Posts';
import PostView from './views/PostView';
import Login from './views/Login';
import Signup from './views/Signup';

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/dashboard",
                element: <Navigate to="/" />
            },
            {
                path: "/",
                element: <Dashboard />,
            },
            {
                path: "/posts",
                element: <Posts />,
            },
            {
                path: "/posts/create",
                element: <PostView />,
            },
            {
                path: "/post/:id",
                element: <PostView />,
            },
        ]
    },
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signup",
                element: <Signup />
            },
        ]
    },
    
]);

export default router;
