import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import App from './App.jsx';
import Accomodations from './pages/accomodations.jsx';
import Gallery from './pages/gallery.jsx';
import Contactus from './pages/contactus.jsx';
import AboutUs from './pages/aboutus.jsx';

const router = createBrowserRouter([

  {path: '/', element: <App />},
  
  {path: '/Accomodations', element: <Accomodations/>},
  
  {path: '/contactus', element: <Contactus />},
  
  {path: '/gallery', element: <Gallery/>},

  {path: '/aboutus', element: <AboutUs/>}

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>
)
