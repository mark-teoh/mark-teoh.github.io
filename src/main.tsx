import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router";
import Home from './pages/HomePage.tsx'
import Experience from './pages/ExperiencePage.tsx';
import Diving from './pages/DivingPage.tsx';
import Contact from './pages/ContactPage.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import Memdive  from './pages/memdive/Memdive.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage />
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
  },
    {
    path: "memdive",
    element: <Memdive/>
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
    </StrictMode>
);
