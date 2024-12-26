import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import images from '../constants/images';
import Featured from '../components/Featured';
import SectionHeading from '../components/SectionHeading';
// Import icons
import { 
  FaPython, 
  FaReact, 
  FaNodeJs, 
  FaHtml5, 
  FaCss3, 
  FaJava, 
  FaGithub,
  FaFigma,
  FaAndroid,
  FaUnity,
  FaJs
} from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiFlutter, SiFramer } from "react-icons/si";

const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, []);

  const currentYear = new Date().getFullYear();

  // Skills carousel setup
  const skills = [
    { name: "Python", icon: <FaPython />, color: "#4B8BBE", textColor: "#ffffff" },
    { name: "React.js", icon: <FaReact />, color: "#61DAFB", textColor: "#282c34" },
    { name: "Node.js", icon: <FaNodeJs />, color: "#68A063", textColor: "#ffffff" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6", textColor: "#ffffff" },
    { name: "JavaScript", icon: <FaJs />, color: "#F0DB4F", textColor: "#282c34" },
    { name: "HTML", icon: <FaHtml5 />, color: "#E34C26", textColor: "#ffffff" },
    { name: "CSS", icon: <FaCss3 />, color: "#264de4", textColor: "#ffffff" },
    { name: "Java", icon: <FaJava />, color: "#5382A1", textColor: "#ffffff" },
    { name: "GitHub", icon: <FaGithub />, color: "#333333", textColor: "#ffffff" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "#38B2AC", textColor: "#282c34" },
    { name: "Flutter", icon: <SiFlutter />, color: "#02569B", textColor: "#ffffff" },
    { name: "Framer Motion", icon: <SiFramer />, color: "#000000", textColor: "#ffffff" },
  ];
  const duplicatedSkills = [...skills, ...skills];
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const scrollContainer = containerRef.current;
    if (!scrollContainer) return;

    let scrollPos = scrollContainer.scrollLeft;
    const scrollSpeed = 1;

    const scroll = () => {
      if (!isDragging) {
        scrollPos += scrollSpeed;
        if (scrollPos >= scrollContainer.scrollWidth / 2) {
          scrollPos = 0;
        }
        scrollContainer.scrollLeft = scrollPos;
      }
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDragging]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="min-h-screen pt-32">
      <div className="py-16 px-4 max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
            whileHover={{ scale: 1.05 }}
          >
            Hello, I'm Shreyas
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            A high school student passionate about AI and machine learning. 
          </motion.p>
        </motion.div>

        {/* Featured Section */}
        <Featured />

        {/* Skills Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <SectionHeading>Technical Skills</SectionHeading>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-lg border border-gray-300/20 backdrop-blur-lg flex flex-col items-center justify-center"
                style={{ backgroundColor: skill.color, color: skill.textColor }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <span className="text-4xl mb-2">{skill.icon}</span>
                <span className="text-xl font-semibold">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Journey Timeline */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <SectionHeading>My Journey</SectionHeading>
          <div className="space-y-8">
            <motion.div 
              className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm relative"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4">
                <div className="min-w-[100px] text-blue-400 font-semibold">2022</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">First Website</h3>
                  <p className="text-gray-300">
                    Built my first website using HTML and CSS. I learned how to use 
                    HTML to structure my website and how to use CSS to style my website.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm relative"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4">
                <div className="min-w-[100px] text-blue-400 font-semibold">2023</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Started to learn Java</h3>
                  <p className="text-gray-300">
                    I learned how to use Java and grew my interest in the language.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm relative"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4">
                <div className="min-w-[100px] text-blue-400 font-semibold">2024</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Learned many new languages</h3>
                  <p className="text-gray-300">
                    After learning Java, I learned many other languages such as Python, JavaScript, Node.js, and TypeScript.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <div className="w-full py-4 mt-20 border-t border-gray-800">
        <div className="text-center">
          <span className="text-gray-400 text-sm">
            © {currentYear} Shreyas Korithiwada. All rights reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;