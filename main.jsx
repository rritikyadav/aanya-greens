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
import Videogallery from './src/pages/videoGallery.jsx';

const router = createHashRouter([

  {path: '/', element: <App />},
  
  {path: '/Accomodations', element: <Accomodations/>},

  {path:'/Events', element:<EventsActivities/>},
  
  {path: '/Contact', element: <Contactus />},
  
  {path: '/E-Gallery', element: <Gallery/>},

  {path: '/Videogallery', element: <Videogallery/>},

  {path: '/About', element: <AboutUs/>}

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>
)
