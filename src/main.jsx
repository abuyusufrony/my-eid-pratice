import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Hook from './Components/Hook/Hook.jsx'
import Home from './Components/Pages/Home.jsx'
import Bookmarks from './Components/Bookmark/Bookmarks.jsx'
import Blogs from './Components/Blogs/Blogs.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Hook></Hook>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/Bookmarks',
        element: <Bookmarks></Bookmarks>
      },
      {
        path: '/Blogs',
        element: <Blogs></Blogs>,
        loader: () => fetch('https://dev.to/api/articles?per_page=5&top=7')
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
