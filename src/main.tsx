import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router";
import './index.css'
import Home from './pages/HomePage.tsx'
import Experience from './pages/ExperiencePage.tsx';
import Diving from './pages/DivingPage.tsx';
import Contact from './pages/ContactPage.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <div>Error 404</div>
  },
  {
    path: "experience",
    element: <Experience/>
  },
  {
    path: "diving",
    element: <Diving/>
  },
  {
    path: "contact",
    element: <Contact/>
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
    </StrictMode>
);
