import { motion } from 'framer-motion';
import { BsStarFill } from 'react-icons/bs';

const Featured = () => {
  const featuredItems = [
    {
      title: "International Codementum Coding Competion - 1st Place",
      date: "December 2023",
      description: "My computer science class and I placed first out of 4000+ schools in the reputed Codementum Coding competition.",
      link: "https://codementum.com/hour-of-code-2023" // Optional: Add link to project or news article
    },
    // Add more items as needed
  ];

  return (
    <motion.div 
      className="mb-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
        Featured
      </h2>
      <div className="space-y-4">
        {featuredItems.map((item, index) => (
          <motion.div
            key={index}
            className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-blue-500/20"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <div className="flex items-start gap-4">
              <div className="text-blue-400">
                <BsStarFill className="text-xl" />
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold text-gray-200">{item.title}</h3>
                  <span className="text-sm text-blue-400">{item.date}</span>
                </div>
                <p className="text-gray-400 mt-2">{item.description}</p>
                {item.link && (
                  <a 
                    href={item.link} 
                    className="text-blue-400 hover:text-blue-300 inline-block mt-2 text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more →
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Featured; 