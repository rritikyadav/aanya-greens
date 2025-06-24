import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import App from './App.jsx';
import Contactus from './pages/contactus.jsx';
import Gallery from './pages/gallery.jsx';
import Accomodations from './pages/accomodations.jsx';

const router = createBrowserRouter([

  {path: '/', element: <App />},

  {path: '/contactus', element: <Contactus />},

  {path: '/gallery', element: <Gallery/>},

  {path: '/Accomodations', element: <Accomodations/>}

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>
)
