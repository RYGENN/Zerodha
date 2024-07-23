import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider  } from 'react-router-dom'
import Homepage from './components/Homepage'
import Aboutpage from './components/Aboutpage'
import Signpage from './components/Signpage'
import Pricingpage from './components/Pricingpage'
import Productpage from './components/Productpage'

function App() {

  const appRouter = createBrowserRouter([
    {
      path : '/',
      element : <Homepage/>
    },
    {
      path : '/signup',
      element:<Signpage/> 
    },
    {
      path : '/about',
      element :<Aboutpage/> 
    },
    {
      path : '/products',
      element :<Productpage/> 
    },
    {
      path : '/pricing',
      element :<Pricingpage/>  
    },
  ])


  return (
    <>
      <RouterProvider router={appRouter} />
     
    </>
  )
}

export default App
