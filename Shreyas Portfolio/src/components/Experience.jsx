import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin, FiCheckCircle } from 'react-icons/fi';

const experiences = [
  {
    title: "UI Development Intern",
    organization: "Allocore",
    location: "Mechanicsburg, PA",
    date: "July 2025 - Present",
    points: [
    ],
    color: "from-blue-500 to-sky-400"
  },
  {
    title: "Co-Founder",
    organization: "SleekCRM",
    location: "Remote",
    date: "June 2025 - Present",
    points: [
      "Currently developing a CRM platform targeted towards small businesses",
    ],
    color: "from-blue-500 to-sky-400"
  },
  {
    title: "Tech Intern @ Rove (YC W24)",
    organization: "Harvard Undergraduate Ventures",
    location: "Cambridge, MA",
    date: "June 2025 - August 2025",
    points: [
      "Developed data pipelines and algorithms using Python and REST APIs to analyze airfares, identify cost-saving synthetic routing opportunities, and build a recommendation engine for optimizing travel rewards across flights, hotels, and points.",
      "Created a user-friendly web application with interactive visualizations and real-time data processing, gaining hands-on experience in API integration, algorithm optimization, and user experience design in the fintech travel rewards industry."
    ],
    color: "from-blue-500 to-sky-400"
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-[#0A182A]">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-sky-500 mb-4">
            Professional Experience
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My journey in the tech industry, from internships to research roles.
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-sky-400 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-gray-800/50 z-10">
                <div className="flex flex-wrap gap-4 items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                    <div className="flex items-center gap-4 text-gray-400 text-sm">
                      <span className="flex items-center gap-2">
                        <FiBriefcase />
                        {exp.organization}
                      </span>
                      <span className="flex items-center gap-2">
                        <FiMapPin />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full flex items-center gap-2">
                    <FiCalendar />
                    {exp.date}
                  </div>
                </div>

                <ul className="space-y-3 mt-6">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <FiCheckCircle className="text-sky-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;

