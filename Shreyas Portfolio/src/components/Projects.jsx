import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import images from '../constants/images';
import { FaHtml5, FaReact, FaNodeJs, FaJs} from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiFramer, SiGodotengine, SiAseprite, SiGithub, SiGit} from 'react-icons/si';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const projects = [
    {
      title: "Portfolio Website",
      description: "This is my portfolio website, where I can showcase my projects and skills. I used React, JSX, and Tailwind CSS to create this website.",
      image: images.projects.mlProject2,
      tech: ["HTML","React", "JavaScript", "Tailwind CSS", "Node.js", "TypeScript", "Framer Motion"],
      github: "https://github.com/Shreyask2/Shreyas-Portfolio",
      demo: "https://skorithiwada.vercel.app/",
      highlights: [
        "Showcases my projects and skills",
        "Responsive design",
        "Interactive elements",
        "Modern UI/UX",
      ]
    },

    {
      title: "TowerFall",
      description: "A fun topdown adventure game with progressive ability selection created for a tech competetion along with peers! The target audience for our game would mainly include action game enthusiasts above the age of 8 with a minor amount of gaming experience.",
      image: images.projects.mlProject5,
      tech: ["Godot", "Aseprite", "GitHub", "Git"],
      github: "https://github.com/Shreyask2/TowerFall",
      demo: "https://polishcow13.itch.io/towerfall",
      highlights: [
        "Progressive ability selection",
        "Randomized Room Generation",
        "Fun gameplay",
        "Mythical characters",
      ]
    },
    // Add more projects...
  ];

  const techIcons = {
    HTML: <FaHtml5 className="text-orange-500" />,
    React: <FaReact className="text-sky-400" />,
    JavaScript: <FaJs className="text-yellow-500" />,
    "Tailwind CSS": <SiTailwindcss className="text-sky-400" />,
    "Node.js": <FaNodeJs className="text-green-500" />,
    "TypeScript": <SiTypescript className="text-blue-500" />,
    "Framer Motion": <SiFramer className="text-blue-400" />,
    "Godot": <SiGodotengine className="text-sky-300" />,
    "Aseprite": <SiAseprite className="text-orange-500" />,
    "GitHub": <SiGithub className="text-white-500" />,
    "Git": <SiGit className="text-red-500" />,
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="projects" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-sky-400 mb-2">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-sm">
            Explore some of my recent works!
          </p>
        </motion.div>

        {/* Project Showcase - Now with flex-1 to take remaining space */}
        <div className="relative flex-1 flex flex-col">
          {/* Navigation Arrows */}
          <div className="absolute inset-x-[-1rem] md:inset-x-[-3.5rem] top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-10">
            <motion.button
              className="pointer-events-auto p-2 rounded-full bg-gray-900/50 backdrop-blur-sm border border-gray-700/30 hover:bg-gray-800/50 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrevious}
            >
              <FiChevronLeft className="text-xl text-gray-300" />
            </motion.button>
            <motion.button
              className="pointer-events-auto p-2 rounded-full bg-gray-900/50 backdrop-blur-sm border border-gray-700/30 hover:bg-gray-800/50 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
            >
              <FiChevronRight className="text-xl text-gray-300" />
            </motion.button>
          </div>

          {/* Project Card - Now with flex-1 and overflow handling */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: isHovered ? -5 : 0,
              }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative flex-1 flex flex-col"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-sky-500 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative bg-gray-900/40 rounded-2xl overflow-hidden border border-gray-800/50 backdrop-blur-sm w-full flex flex-col">
                {/* Project Image */}
                <div className="relative h-[35vh] overflow-hidden">
                  <motion.img 
                    src={projects[currentIndex].image} 
                    alt={projects[currentIndex].title}
                    className="object-cover w-full h-full"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 overflow-y-auto">
                  <h3 className="text-2xl font-bold mb-4 text-white text-center">
                    {projects[currentIndex].title}
                  </h3>

                  {/* Tech Stack Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mb-6">
                    {projects[currentIndex].tech.map((tech, index) => (
                      <motion.div 
                        key={tech} 
                        className="flex items-center justify-center p-2 bg-blue-500/10 rounded-lg border border-blue-500/20 hover:bg-blue-500/20 transition-colors group"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        {techIcons[tech] && (
                          <span className="mr-2">{techIcons[tech]}</span>
                        )}
                        <span className="text-xs sm:text-sm font-medium text-sky-400 group-hover:text-sky-300 transition-colors">
                          {tech}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <p className="text-gray-300 text-sm mb-6 leading-relaxed text-center">
                    {projects[currentIndex].description}
                  </p>

                  {/* Project Highlights with centered title */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-center text-gray-200">
                      Key Features
                    </h4>
                    <div className="grid gap-2">
                      {projects[currentIndex].highlights.map((highlight, index) => (
                        <motion.div 
                          key={index}
                          className="flex items-center gap-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                          <span className="text-gray-300 text-sm">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons - Centered */}
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <motion.a 
                      href={projects[currentIndex].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2 text-sm bg-gray-800/80 rounded-lg hover:bg-gray-700/80 transition-all border border-gray-700/50"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FiGithub className="text-lg" />
                      <span>View Code</span>
                    </motion.a>
                    <motion.a 
                      href={projects[currentIndex].demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2 text-sm bg-blue-600 rounded-lg hover:bg-blue-700 transition-all"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FiExternalLink className="text-lg" />
                      <span>Project Link</span>
                    </motion.a>
                  </div>
                </div>
              </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Project Navigation Dots */}
          <div className="flex justify-center gap-3 mt-4">
            {projects.map((_, index) => (
              <motion.button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex 
                    ? 'bg-blue-500' 
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

