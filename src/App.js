import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Añade Navigate
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <Navigation />
      <ScrollToTop />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <Projects />
              <About />
              <Contact />
              <Footer />
            </>
          } 
        />
        {/* Añade esta ruta al final para manejar 404 */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;