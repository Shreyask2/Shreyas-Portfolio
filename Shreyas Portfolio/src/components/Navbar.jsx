"use client"

import { Link, useLocation, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { FiMenu, FiX } from "react-icons/fi"
import Logo from "./Logo"

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [activeSection, setActiveSection] = useState("hero")
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [indicatorStyle, setIndicatorStyle] = useState({
    width: 0,
    left: 0,
    top: 0,
    height: 0,
    opacity: 0,
  })

  // Handle navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Reset indicator when navigating to About page
  useEffect(() => {
    if (location.pathname === "/about") {
      setIndicatorStyle({
        width: 0,
        left: 0,
        top: 0,
        height: 0,
        opacity: 0,
      })
      setActiveSection("")
    }
  }, [location.pathname])

  // Update active section based on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname !== "/") return

      const sections = ["hero", "experience", "projects", "contact"]
      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (const section of sections) {
        const element = document.getElementById(section)
        if (!element) continue

        const rect = element.getBoundingClientRect()
        const absoluteTop = window.scrollY + rect.top
        const absoluteBottom = absoluteTop + rect.height

        if (scrollPosition >= absoluteTop && scrollPosition <= absoluteBottom) {
          setActiveSection(section)
          updateIndicator(section)
          return
        }
      }

      // Special case for hero section when at the top
      if (window.scrollY < window.innerHeight / 2) {
        setActiveSection("hero")
        updateIndicator("hero")
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener("scroll", handleScroll)
  }, [location.pathname])

  // Update indicator position
  const updateIndicator = (sectionId) => {
    if (location.pathname !== "/") {
      setIndicatorStyle({
        width: 0,
        left: 0,
        top: 0,
        height: 0,
        opacity: 0,
      })
      return
    }

    const button = document.querySelector(`[data-section="${sectionId}"]`)
    if (!button) {
      setIndicatorStyle({
        width: 0,
        left: 0,
        top: 0,
        height: 0,
        opacity: 0,
      })
      return
    }

    const rect = button.getBoundingClientRect()
    const navRect = button.closest(".nav-items")?.getBoundingClientRect()

    if (navRect) {
      setIndicatorStyle({
        width: rect.width,
        height: rect.height,
        left: rect.left - navRect.left,
        top: rect.top - navRect.top,
        opacity: 1,
      })
    }
  }

  // Handle navigation
  const handleNavigation = (sectionId) => {
    if (location.pathname === "/about") {
      navigate("/")
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          const navbarHeight = 80
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }
      }, 100)
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        const navbarHeight = 80
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    }
    setActiveSection(sectionId)
    setIsNavOpen(false)
  }

  // Handle home click
  const handleHomeClick = () => {
    if (location.pathname === "/about") {
      navigate("/")
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
    setActiveSection("hero")
    setIsNavOpen(false)
  }

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#0B192C]/80 backdrop-blur-xl border-b border-blue-900/50"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div
        className={`max-w-6xl mx-auto px-4 transition-all duration-300 ${
          scrolled ? "py-3" : "py-4"
        }`}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center">
            <Link to="/" onClick={handleHomeClick}>
              <Logo size={40} />
            </Link>
          </motion.div>

          {/* Close button - shown when menu is open */}
          {isNavOpen && (
            <div className="sm:hidden absolute left-1/2 transform -translate-x-2/3 top-1/2 -translate-y-1/2">
              <button onClick={toggleNav} className="text-white p-2" aria-label="Close menu">
                <FiX size={24} />
              </button>
            </div>
          )}

          {/* Menu button - shown when menu is closed */}
          {!isNavOpen && (
            <div className="sm:hidden fixed right-20 top-4 z-50">
              <button onClick={toggleNav} className="text-white p-2" aria-label="Open menu">
                <FiMenu size={24} />
              </button>
            </div>
          )}

          {/* Navigation items */}
          <div className="flex-1 flex justify-end">
            <div
              className={`nav-items relative ${isNavOpen ? "absolute top-0 left-0 right-0 bg-gray-900/95 border-b border-gray-800/50 p-4" : "hidden"} sm:flex sm:items-center sm:gap-8`}
            >
              <Link
                to="/about"
                onClick={() => {
                  setIsNavOpen(false)
                  setActiveSection("")
                  setIndicatorStyle({
                    width: 0,
                    left: 0,
                    top: 0,
                    height: 0,
                    opacity: 0,
                  })
                }}
                className={`block w-full sm:w-auto text-left py-2 px-4 rounded-lg transition-all duration-300 ${
                  location.pathname === "/about"
                    ? "text-blue-300 bg-blue-500/20"
                    : "text-gray-300 hover:text-blue-300 hover:bg-blue-500/10"
                }`}
              >
                About
              </Link>
              {['experience', 'projects', 'contact'].map((item) => (
                <motion.button
                  key={item}
                  data-section={item}
                  onClick={() => handleNavigation(item)}
                  className={`block w-full sm:w-auto text-left py-2 px-4 rounded-lg transition-all duration-300 ${
                    activeSection === item && location.pathname === "/"
                      ? "text-blue-300 bg-blue-500/20"
                      : "text-gray-300 hover:text-blue-300 hover:bg-blue-500/10"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="capitalize">{item}</span>
                </motion.button>
              ))}

              {/* Floating indicator (visible only on desktop and homepage) */}
              {location.pathname === "/" && (
                <motion.div
                  className="absolute rounded-lg hidden sm:block"
                  style={{
                    background: "linear-gradient(135deg, rgba(37, 99, 235, 0.2), rgba(56, 189, 248, 0.2))",
                    boxShadow: "0 0 20px rgba(56, 189, 248, 0.15)",
                    backdropFilter: "blur(4px)",
                  }}
                  initial={false}
                  animate={{
                    width: indicatorStyle.width,
                    height: indicatorStyle.height,
                    x: indicatorStyle.left,
                    y: indicatorStyle.top,
                    opacity: indicatorStyle.opacity,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30,
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
