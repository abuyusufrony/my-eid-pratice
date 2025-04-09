import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Hook from './Components/Hook/Hook.jsx'
import Home from './Components/Pages/Home.jsx'
import Bookmarks from './Components/Bookmark/Bookmarks.jsx'
import Blogs from './Components/Blogs/Blogs.jsx'
import BlogDetails from './Components/BlogDetails/BlogDetails.jsx'
import Content from './Components/Content/Content.jsx'
import Author from './Components/Author/Author.jsx'
import { Toaster } from 'react-hot-toast'

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
        loader: () => fetch('https://dev.to/api/articles?per_page=12&top=7')
      },
      {
        path: '/Blogs/:id',
        element: <BlogDetails></BlogDetails>,
        loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
        children: [
          {
            path: '',
            element: <Content></Content>,
            loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),

          },
          {
            path: 'author',
            element: <Author></Author>,
            loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`)
          }
        ]

      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <Toaster></Toaster>
  </StrictMode>,
)
