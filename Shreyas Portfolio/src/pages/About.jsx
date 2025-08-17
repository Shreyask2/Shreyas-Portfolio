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
  FaJs,
  FaVuejs,
  FaGitAlt,
  FaDocker,
  FaAws
} from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiFlutter, SiFramer, SiExpress, SiPostgresql, SiSupabase, SiPrisma } from "react-icons/si";
import { FiAward, FiCalendar, FiMapPin } from 'react-icons/fi';

const educationData = [
  {
    title: "12th Grade Student",
    organization: "The Hill School",
    location: "Pottstown, PA",
    date: "September 2022 - May 2026",
    category: "Education",
    points: [
      "Math Fellow",
      "Varsity Tennis",
      "Technology Student Association (TSA)",
      "DECA",
      "Squash",
    ],
    skills: ["HTML", "Computer Science", "Computer-Aided Design (CAD)", "Java", "Python", "CSS", "Engineering", "Project Management"],
    color: "from-blue-500 to-sky-400"
  },

  {
    title: "HUVTSP Class of 2025",
    organization: "Harvard University",
    location: "Cambridge, MA",
    date: "June 2025 - August 2025",
    category: "Summer Program",
    points: [
      "Accepted to the extremely selective Harvard Undergraduate Ventures-TECH Summer Program, hosted in collaboration between Harvard Undergraduate Ventures and the Technology & Entrepreneurship Center at Harvard (TECH) within the Harvard School of Engineering and Applied Sciences (SEAS).", 
      "HUVTSP provides students with hands-on experience by working with leading startups and mentorship from world-renowned CEOs, investors, and Harvard faculty.",
      "Through practical work and daily sessions with industry experts, students acquire technical skills in marketing, entrepreneurship, innovation, and problem-solving in real-world settings, learning useful skills to tackle challenging problems in high-speed, technology-dependent settings.",
    ],
    skills: ["Startup Development", "Team Management", "Team Leadership", "Product Development", "Market Research", "Data Analysis", "Entrepreneurial Strategy", "AI and Technology Implementation"],
    color: "from-red-400 to-red-600"
  },
];

const EducationSection = () => (
    <motion.div 
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
    >
        <SectionHeading>Education</SectionHeading>
        <div className="space-y-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <motion.div
                  className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-gray-800/50 relative z-10 overflow-hidden"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-sky-400 opacity-50" />
                  <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-blue-500 to-sky-400 opacity-50" />
                  <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-blue-500 to-sky-400 opacity-50" />
                  <div className="absolute bottom-0 left-0 w-1 h-full bg-gradient-to-t from-blue-500 to-sky-400 opacity-50" />

                  <div className="flex flex-wrap gap-4 items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                        <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${edu.color} bg-opacity-10 text-white font-medium`}>
                          {edu.category}
                        </span>
                        <div className="flex items-center gap-1">
                          <FiCalendar className="text-gray-500" />
                          {edu.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <FiMapPin className="text-gray-500" />
                          {edu.location}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-1">{edu.title}</h3>
                      <p className="text-gray-400">{edu.organization}</p>
                    </div>
                    <div className="hidden md:block">
                      <motion.div 
                        className={`w-12 h-12 rounded-full bg-gradient-to-r ${edu.color} p-0.5`}
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.8 }}
                      >
                        <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                          <FiAward className="text-xl text-white" />
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <ul className="space-y-2">
                      {edu.points.map((point, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-2 text-gray-300"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                          viewport={{ once: true }}
                        >
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${edu.color} mt-2`} />
                          <span>{point}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-4">
                      {edu.skills.map((skill, i) => (
                        <motion.span
                          key={skill}
                          className="px-3 py-1 text-xs sm:text-sm bg-gray-800/50 rounded-full border border-gray-700/50 text-gray-300"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + (i * 0.1), duration: 0.5 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.2)' }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <div className={`absolute inset-0 bg-gradient-to-r ${edu.color} opacity-0 group-hover:opacity-10 blur-xl rounded-xl transition-opacity duration-500`} />
              </motion.div>
            ))}
        </div>
    </motion.div>
);

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
    { name: "Express", icon: <SiExpress />, color: "#000000", textColor: "#ffffff" },
    { name: "Vue.js", icon: <FaVuejs />, color: "#4FC08D", textColor: "#ffffff" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791", textColor: "#ffffff" },
    { name: "Supabase", icon: <SiSupabase />, color: "#3ECF8E", textColor: "#ffffff" },
    { name: "Prisma", icon: <SiPrisma />, color: "#2D3748", textColor: "#ffffff" },
    { name: "Git", icon: <FaGitAlt />, color: "#F05032", textColor: "#ffffff" },
    { name: "Docker", icon: <FaDocker />, color: "#2496ED", textColor: "#ffffff" },
    { name: "AWS Services", icon: <FaAws />, color: "#232F3E", textColor: "#ffffff" },
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
    <div className="min-h-screen pt-32 bg-[#0B192C]">
      <div className="py-16 px-4 max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-sky-400"
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

        {/* Education Section */}
        <EducationSection />

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