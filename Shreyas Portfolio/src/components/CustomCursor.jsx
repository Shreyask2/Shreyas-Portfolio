import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 z-50 pointer-events-none"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
    >
      <div
        className="relative"
        style={{
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div
          className="absolute"
          style={{
            width: '32px',
            height: '32px',
            border: '2px solid rgba(64, 196, 255, 0.8)',
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        />
        <div
          className="absolute"
          style={{
            width: '8px',
            height: '8px',
            backgroundColor: 'rgba(64, 196, 255, 0.8)',
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        />
      </div>
    </motion.div>
  );
};

export default CustomCursor; 