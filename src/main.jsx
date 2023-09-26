import React, { children } from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import ContactForm from './Components/ContactForm.jsx';
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Header from './Components/Header.jsx';
import Users from './Components/Users';
import UserDetails from './Components/UserDetails';
import Posts from './Components/Posts';
import PostDetails from './Components/PostDetails';
import Error from './Components/Error';
import Details from './Components/Details';

const router = createBrowserRouter([
  {
    path: "",
    element: <Header></Header>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/contact",
        element: <ContactForm></ContactForm>
      },
      {
        path: "/Details",
        element: <Details></Details>
       
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/users",
        loader: ()=> fetch ('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path: "/users/:id",
        loader: ({params})=> fetch (`https://jsonplaceholder.typicode.com/users/${params.id}`),
        element: <UserDetails></UserDetails>
      },
      {
        path: "/posts",
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },
      {
        path: "/posts/:id",
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
        element: <PostDetails></PostDetails>
      }
  ]
  },
  
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
