import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './pages/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    // Clear any hash from the URL
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
    
    // Force scroll to top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });

    // Prevent default scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative bg-[#0B192C] text-white min-h-screen flex flex-col">
        <Cursor cursorVariant={cursorVariant} />
        <Navbar setCursorVariant={setCursorVariant} />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero setCursorVariant={setCursorVariant} />
                <Experience />
                <Projects />
                <Contact />
              </>
            } />
            <Route path="/about" element={<About />} />
                      </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App; 