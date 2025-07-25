import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { createHashRouter , RouterProvider } from "react-router-dom";
import App from './src/App.jsx';
import Accomodations from './src/pages/accomodations.jsx';
import Gallery from './src/pages/gallery.jsx';
import Contactus from './src/pages/contactus.jsx';
import AboutUs from './src/pages/aboutus.jsx';
import EventsActivities from './src/pages/events&activities.jsx';

const router = createHashRouter([

  {path: '/', element: <App />},
  
  {path: '/Accomodations', element: <Accomodations/>},

  {path:'/event&activities', element:<EventsActivities/>},
  
  {path: '/contactus', element: <Contactus />},
  
  {path: '/gallery', element: <Gallery/>},

  {path: '/aboutus', element: <AboutUs/>}

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>
)
