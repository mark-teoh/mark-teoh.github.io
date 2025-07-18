import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Route, Routes } from "react-router";

import Home from './pages/HomePage.tsx'
import Experience from './pages/ExperiencePage.tsx';
import Diving from './pages/DivingPage.tsx';
import Contact from './pages/ContactPage.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import Memdive  from './pages/memdive/Memdive.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="experience" element={<Experience />} />
        <Route path="diving" element={<Diving />} />
        <Route path="contact" element={<Contact />} />
        <Route path="memdive" element={<Memdive />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);
