import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './pages/About';
import CustomCursor from './components/CustomCursor';
import './index.css';

function App() {
  return (
    <Router>
      <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen">
        <CustomCursor />
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={
            <>
              <Hero />
              <Experience />
              <Projects />
              <Contact />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 