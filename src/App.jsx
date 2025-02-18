import React from 'react'
import HomePage from "./routes/homepage";

import{
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";

import ListPage from './listPage/listPage';
import Layout from "./routes/layout/layout";
import SinglePage from "./routes/singlepage/singlePage";
import ProfilePage from './routes/profilePage/profilePage';
import AboutUs from './aboutus/aboutus';
import ContactPage from './contact/contact';
import AgentPage from './agents/AgentsPage';
function App() {
  const router = createBrowserRouter([
    {

    path:"/",
    element:
      <Layout/>,
      children:[
        {
          path:"/",
          element:<HomePage/>
        },
        {
        path:"/homepage",
        element:<HomePage/>
      },
     
    
      {
        path:"/list",
        element:<ListPage/>
      },
      
      {
        path:"/:id",
        element:<SinglePage/>
      },
      {
        path:"profilePage",
        element:<ProfilePage/>
      },
      
      {
        path:"/list",
        element:<ListPage/>
      },
      
      {
        path:"/aboutus",
        element:<AboutUs/>
      },
      {
        path:"/contact",
        element:<ContactPage/>
      },
      {
        path:"/agents",
        element:<AgentPage/>
      },
      
    ]

   
  }
]);
  return (
  
      <RouterProvider router={router}/>
  )

}



export default App;