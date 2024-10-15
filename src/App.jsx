import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import First from './pages/First'
import Second from './pages/Second'
import Hello from './pages/Hello'
import Hai from './pages/hai'
import Reduce from './pages/Reduce'
import Button from './pages/Button'
import Buttontwo from './pages/buttontwo'
import One from './pages/one'
import Two from './pages/two'
import {Red} from './pages/Red'


function App() {
  

const display = createBrowserRouter([
  {path : '/', 
    element : <First/>
  },
  {
    path : '/second/:value',
    element: <Second/>
  },
  {
    path : '/hello',
    element: <Hello/>
  },
  {
    path : '/hai',
    element: <Hai/>
  },
  {
    path : '/reduce',
    element: <Reduce/>

   },  {
     path : '/button',
     element: <Button/>
   },
   {
     path : '/buttontwo',
     element: <Buttontwo />
   },
   {
     path : '/one',
     element: <One/>
   },
   {
     path : '/two',
     element: <Two />
   },{
    path : '/red',
    element: <Red/>
  }
])
  return (
    <RouterProvider router={display}></RouterProvider>
  )
}

export default App