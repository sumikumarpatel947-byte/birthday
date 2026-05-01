import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const StarField = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const newStars = [];
    for (let i = 0; i < 80; i++) {
      newStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 4,
        duration: Math.random() * 3 + 3,
      });
    }
    setStars(newStars);
  }, []);

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 0 }}>
      {stars.map((star) => (
        <motion.div
          key={star.id}
          style={{
            position: 'absolute',
            borderRadius: '50%',
            backgroundColor: 'white',
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            boxShadow: '0 0 6px rgba(255, 255, 255, 0.5)',
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            y: [0, -80, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            opacity: {
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: 'easeInOut',
            },
            y: {
              duration: star.duration * 2,
              repeat: Infinity,
              delay: star.delay,
              ease: 'easeInOut',
            },
            scale: {
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: 'easeInOut',
            },
          }}
        />
      ))}
    </div>
  );
};

export default StarField;
