import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Scene1_Entry = ({ onAdvance }) => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const textTimer = setTimeout(() => setShowText(true), 1000);
    const advanceTimer = setTimeout(() => onAdvance(), 4000);
    return () => {
      clearTimeout(textTimer);
      clearTimeout(advanceTimer);
    };
  }, [onAdvance]);

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 2,
  }));

  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#070714', overflow: 'hidden' }}>
      {/* Golden Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          style={{
            position: 'absolute',
            width: particle.size,
            height: particle.size,
            borderRadius: '50%',
            backgroundColor: '#e8c96d',
            boxShadow: '0 0 10px rgba(232, 201, 109, 0.8), 0 0 20px rgba(232, 201, 109, 0.4)',
            left: particle.x,
            top: particle.y,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: particle.opacity, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{
            duration: 2,
            delay: particle.delay,
            ease: 'easeOut',
          }}
        />
      ))}

      {/* Main Text */}
      {showText && (
        <motion.div
          style={{ textAlign: 'center', zIndex: 10 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <motion.h1
            style={{ fontFamily: "Cormorant Garamond, serif", fontSize: '3.5rem', color: '#e8c96d', letterSpacing: '0.05em', textShadow: '0 0 20px rgba(232,201,109,0.8), 0 0 40px rgba(232,201,109,0.4)', marginBottom: '1rem' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Shree Radhe Betaa Ji 🙏
          </motion.h1>
          <motion.p
            style={{ fontFamily: "Tiro Devanagari Hindi, serif", fontSize: '1.25rem', color: '#fdf4e7', fontStyle: 'italic' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Ek khaas pal... sirf tumhare liye 💛
          </motion.p>
        </motion.div>
      )}
    </div>
  );
};

export default Scene1_Entry;
