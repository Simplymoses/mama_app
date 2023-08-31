import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import Josiah from './pages/Josiah'

const router = createBrowserRouter([
  {path: '/', element: <App/>}, 
  {path: '/josiah-laughs', element: <Josiah/>}, 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
