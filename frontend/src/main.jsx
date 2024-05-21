import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Root from './Root.jsx'
import SignupForm from './SignupForm.jsx'



import {
  createBrowserRouter,RouterProvider
} from 'react-router-dom'
import Newblog from './Newblog.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        path: "/",
        element: <App/>,
      },
      {
        path: "/home",
        element: <App/>,
      },
   
      {
        path: "/signup",
        element: <SignupForm/>,
      },
      {
        path: "/new",
        element: <Newblog/>,
      }


    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
