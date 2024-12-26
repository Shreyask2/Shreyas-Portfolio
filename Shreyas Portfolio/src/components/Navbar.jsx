import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from './Logo';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('hero');
  const [indicatorStyle, setIndicatorStyle] = useState({
    width: 0,
    left: 0,
    top: 0,
    height: 0,
    opacity: 0
  });

  // Update active section based on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname !== '/') return;

      const sections = ['hero', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        const absoluteTop = window.scrollY + rect.top;
        const absoluteBottom = absoluteTop + rect.height;

        if (section === 'hero' && scrollPosition < window.innerHeight) {
          setActiveSection('hero');
          return;
        }

        if (scrollPosition >= absoluteTop && scrollPosition <= absoluteBottom) {
          setActiveSection(section);
          return;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Handle navigation
  const handleNavigation = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(sectionId);
      }
    }
  };

  // Handle home click
  const handleHomeClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setActiveSection('hero');
  };

  // Check for stored scroll position after navigation
  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(location.state.scrollTo);
        }, 100);
      }
    }
  }, [location]);

  // Update indicator position based on active section
  useEffect(() => {
    let targetButton;
    
    // Don't calculate indicator position if we're in hero section
    if (activeSection === 'hero' && location.pathname === '/') {
      setIndicatorStyle({
        width: 0,
        height: 0,
        left: 0,
        top: 0,
        opacity: 0
      });
      return;
    }
    
    if (location.pathname === '/') {
      targetButton = document.querySelector(`.nav-items button[data-section="${activeSection}"]`);
    } else if (location.pathname === '/about') {
      targetButton = document.querySelector('.nav-items a[data-section="about"]');
    }

    if (targetButton) {
      const buttonRect = targetButton.getBoundingClientRect();
      const navRect = targetButton.closest('.nav-items').getBoundingClientRect();
      
      setIndicatorStyle({
        width: buttonRect.width,
        height: buttonRect.height,
        left: buttonRect.left - navRect.left,
        top: 0,
        opacity: 1
      });
    }
  }, [activeSection, location.pathname]);

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-40 bg-gray-900/50 backdrop-blur-md border-b border-gray-800/50 overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Hexagon Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="relative w-full h-full">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute left-1/2 top-1/2 w-12 h-12 border border-blue-400/20"
                style={{
                  transform: `rotate(${i * 60}deg) translateY(-100px)`,
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                }}
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.2,
                  repeat: Infinity,
                }}
              />
            ))}
          </div>
        </div>

        {/* Animated Gradient Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ backgroundSize: '200% 100%' }}
        />

        {/* Glowing Accent Lines */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[1px]"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent)'
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </div>
      </div>

      {/* Main content */}
      <div className="relative max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center relative">
          {/* Enhanced Logo/Name section */}
          <motion.div 
            className="rounded-lg relative group"
            whileHover={{ scale: 1.02 }}
          >
            <button 
              onClick={handleHomeClick}
              className="flex items-center gap-3 py-2 px-4 rounded-lg relative z-10"
            >
              <div className="relative">
                <Logo size={45} />
                <motion.div
                  className="absolute -inset-2 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)',
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Shreyas Korithiwada
              </span>
            </button>
          </motion.div>
          
          {/* Enhanced Navigation items */}
          <div className="nav-items flex gap-8 items-center relative">
            {/* Floating indicator */}
            <motion.div 
              className="absolute rounded-lg"
              style={{
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))',
                boxShadow: '0 0 20px rgba(59, 130, 246, 0.15)',
                backdropFilter: 'blur(4px)',
              }}
              initial={false}
              animate={{
                width: indicatorStyle.width,
                height: indicatorStyle.height,
                x: indicatorStyle.left,
                y: indicatorStyle.top,
                opacity: indicatorStyle.opacity
              }}
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 30
              }}
            />
            
            {/* Enhanced nav links */}
            <Link
              to="/about"
              data-section="about"
              className={`relative group py-2 px-4 rounded-lg transition-all duration-300 ${
                location.pathname === '/about' ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'
              }`}
            >
              <span className="relative z-10">About</span>
              <motion.div
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100"
                style={{
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))',
                }}
                transition={{ duration: 0.3 }}
              />
            </Link>

            {['experience', 'projects', 'contact'].map((item) => (
              <motion.button 
                key={item}
                data-section={item}
                onClick={() => handleNavigation(item)}
                className={`relative group py-2 px-4 rounded-lg transition-all duration-300 ${
                  activeSection === item && location.pathname === '/' 
                    ? 'text-blue-400' 
                    : 'text-gray-300 hover:text-blue-400'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 capitalize">{item}</span>
                <motion.div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100"
                  style={{
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))',
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 