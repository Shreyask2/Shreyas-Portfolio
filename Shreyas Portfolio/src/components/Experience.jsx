import { motion } from 'framer-motion';
import { FiAward, FiCalendar, FiMapPin } from 'react-icons/fi';

const experiences = [
  {
    title: "12th Grade Student",
    organization: "The Hill School",
    location: "Pottstown, PA",
    date: "2022 - Present",
    category: "Education",
    points: [
      "Math Fellow",
      "Varsity Tennis",
      "Technology Student Association (TSA)",
      "Deca",
      "Squash",


    ],
    skills: ["HTML", "Computer Science", "Computer-Aided Design (CAD)", "Java", "Python", "CSS", "Engineering", "Project Management"],
    color: "from-blue-500 to-cyan-500"
  },
  // Add more experiences
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 mb-4">
            Experiences & Achievements
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A timeline of my academic and professional journey in technology and research
          </p>
        </motion.div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Card */}
              <motion.div
                className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-gray-800/50 relative z-10 overflow-hidden"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-50" />
                <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 opacity-50" />
                <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-blue-500 to-purple-500 opacity-50" />
                <div className="absolute bottom-0 left-0 w-1 h-full bg-gradient-to-t from-blue-500 to-purple-500 opacity-50" />

                {/* Header */}
                <div className="flex flex-wrap gap-4 items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                      <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${exp.color} bg-opacity-10 text-white font-medium`}>
                        {exp.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <FiCalendar className="text-gray-500" />
                        {exp.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <FiMapPin className="text-gray-500" />
                        {exp.location}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                    <p className="text-gray-400">{exp.organization}</p>
                  </div>
                  <div className="hidden md:block">
                    <motion.div 
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${exp.color} p-0.5`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                        <FiAward className="text-xl text-white" />
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <ul className="space-y-2">
                    {exp.points.map((point, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-2 text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + (i * 0.1) }}
                        viewport={{ once: true }}
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} mt-2`} />
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {exp.skills.map((skill, i) => (
                      <motion.span
                        key={skill}
                        className="px-3 py-1 text-xs sm:text-sm bg-gray-800/50 rounded-full border border-gray-700/50 text-gray-300"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + (i * 0.1) }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.2)' }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-10 blur-xl rounded-xl transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;

