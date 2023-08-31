import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import Homescreen from './pages/Homescreen'
import Sidebarvar from './pages/Sidebarvar'

const router = createBrowserRouter([
  {path: '/homes', element: <Homescreen/>},
  {path: '/sidebarv', element: <Sidebarvar/>},

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
