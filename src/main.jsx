import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import JobDetails from './components/JobDetails';
import Blog from './components/Blog';
import AppliedJobs from './components/AppliedJobs';
import Statistics from './components/Statistics';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<ErrorPage/>,
    loader: ()=> fetch(`/job_details.json`),
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'job_details/:id',
        element:<JobDetails/>,
        loader:({params})=> fetch(`/job_details.json`)
      },
      {
        path:'statistics',
        element:<Statistics/>,
        loader:  ()=> fetch(`assignment_marks.json`)
      },
      {
        path:'applied_jobs',
        element:<AppliedJobs/>
      },
      {
        path:'blog',
        element:<Blog/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
