import { motion } from 'framer-motion';
import { useState } from 'react';

const Logo = ({ size = 50 }) => {
  const [isHovered, setIsHovered] = useState(false);

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { 
          duration: 1.5,
          delay: i * 0.2,
          ease: "easeInOut"
        },
        opacity: { 
          duration: 0.5,
          delay: i * 0.2
        }
      }
    })
  };

  const circuitVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: i * 0.1 + 1
      }
    })
  };

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="overflow-visible"
    >
      {/* Main brain circuit shape - made smaller to accommodate larger SK */}
      <motion.path
        d="M25 45C25 35 35 25 50 25C65 25 75 35 75 45C75 55 65 60 55 60C45 60 40 65 40 75"
        stroke="#60A5FA"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        variants={pathVariants}
        custom={0}
        initial="hidden"
        animate="visible"
      />
      
      {/* Larger S */}
      <motion.path
        d="M35 35C35 35 45 32 50 32C60 32 65 35 65 42C65 49 55 51 50 51C45 51 35 53 35 60C35 67 40 70 50 70C60 70 65 67 65 67"
        stroke="#60A5FA"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        variants={pathVariants}
        custom={1}
        initial="hidden"
        animate="visible"
      />

      {/* Larger K */}
      <motion.path
        d="M40 30L40 70M40 50L65 30M40 50L65 70"
        stroke="#60A5FA"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        variants={pathVariants}
        custom={2}
        initial="hidden"
        animate="visible"
      />

      {/* Circuit nodes */}
      {[
        [50, 15], [30, 20], [70, 20],
        [40, 40], [60, 40], [50, 60],
        [40, 75]
      ].map(([cx, cy], i) => (
        <motion.circle
          key={i}
          cx={cx}
          cy={cy}
          r="2"
          fill="#60A5FA"
          variants={circuitVariants}
          custom={i}
          initial="hidden"
          animate="visible"
        />
      ))}

      {/* Pulse rings on hover */}
      {isHovered && (
        <>
          {[
            [50, 15], [30, 20], [70, 20],
            [40, 40], [60, 40], [50, 60],
            [40, 75]
          ].map(([cx, cy], i) => (
            <motion.circle
              key={`pulse-${i}`}
              cx={cx}
              cy={cy}
              r="2"
              stroke="#60A5FA"
              strokeWidth="1"
              fill="none"
              initial={{ scale: 1, opacity: 0.8 }}
              animate={{
                scale: [1, 2],
                opacity: [0.8, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </>
      )}

      {/* Data flow particles */}
      {isHovered && (
        <>
          {[
            "M50 15L50 25",
            "M30 20L40 30",
            "M70 20L60 30",
            "M40 40L50 60",
            "M60 40L50 60",
            "M50 60L40 75"
          ].map((d, i) => (
            <motion.circle
              key={`particle-${i}`}
              r="1.5"
              fill="#60A5FA"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0],
                pathOffset: [0, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2
              }}
            >
              <motion.motioncircle
                path={d}
              />
            </motion.circle>
          ))}
        </>
      )}

      {/* Your initials */}
      <motion.text
        x="50"
        y="90"
        textAnchor="middle"
        fill="#60A5FA"
        fontSize="12"
        fontWeight="bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        SK
      </motion.text>
    </motion.svg>
  );
};

export default Logo; 