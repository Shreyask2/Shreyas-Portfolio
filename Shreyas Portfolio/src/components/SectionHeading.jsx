import { motion } from 'framer-motion';

const SectionHeading = ({ children }) => {
  return (
    <motion.h2 
      className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.h2>
  );
};

export default SectionHeading; 