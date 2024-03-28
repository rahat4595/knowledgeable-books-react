import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ListedBooks from './components/ListedBooks/ListedBooks';
import BookDetails from './components/BookDetails/BookDetails';
import ErrorPage from './components/ErrorPage/ErrorPage';
import PagesChart from './components/PagesChart/PagesChart';
import BestSeller from './components/BestSeller/BestSeller';
import AboutUs from './components/AboutUs/AboutUs';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path:'/listed',
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('/books.json')
      },
      {
        path:'/book/:bookId',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/books.json')
      },
      {
        path:'/pages',
        element: <PagesChart></PagesChart>
      },
      {
        path: '/seller',
        element: <BestSeller></BestSeller>
      },
      {
        path: '/about',
        element: <AboutUs></AboutUs>
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
