import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CakeCutModal = ({ isOpen, onClose, onAdvance }) => {
  const [phase, setPhase] = useState(1);
  const [cutting, setCutting] = useState(false);
  const [celebrating, setCelebrating] = useState(false);

  const handleCutCake = () => {
    setCutting(true);
    setTimeout(() => {
      setCelebrating(true);
      setTimeout(() => {
        setPhase(2);
      }, 2000);
    }, 1500);
  };

  const handleNext = () => {
    onClose();
    onAdvance();
  };

  const confettiColors = ['#e8c96d', '#f4788a', '#fdf4e7', '#ffffff', '#ffb6c1', '#ffa500'];

  const celebrationConfetti = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: 50,
    y: 50,
    color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
    delay: Math.random() * 0.3,
    vx: (Math.random() - 0.5) * 60,
    vy: (Math.random() - 0.5) * 60,
  }));

  const celebrationBalloons = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 0.2,
  }));

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        style={{ position: 'fixed', inset: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(7,7,20,0.8)', backdropFilter: 'blur(4px)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(20px)', border: '1px solid rgba(232,201,109,0.3)', borderRadius: '1.5rem', padding: '2.5rem', maxWidth: '28rem', width: '100%', margin: '0 1rem', textAlign: 'center', position: 'relative', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)' }}
          initial={{ scale: 0.8, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.8, y: 50 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {phase === 1 && (
            <>
              <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: '1.5rem', color: '#fdf4e7', marginBottom: '0.5rem' }}>
                Chalo Shree... cake kaato! 🎂
              </h3>
              <p style={{ fontFamily: "Tiro Devanagari Hindi, serif", color: '#e8c96d', fontSize: '1.125rem', marginBottom: '1.5rem' }}>
                Ek click mein janamdin celebrate karo 🥳
              </p>
              <motion.button
                style={{ fontFamily: "DM Sans, sans-serif", padding: '1rem 2.5rem', borderRadius: '9999px', fontSize: '1.125rem', fontWeight: 600, color: '#070714', background: 'linear-gradient(135deg, #e8c96d 0%, #f4788a 100%)', backgroundSize: '200%', cursor: 'pointer', border: 'none', boxShadow: '0 4px 15px rgba(232, 201, 109, 0.3)', position: 'relative', overflow: 'hidden' }}
                whileHover={{ scale: 1.05, boxShadow: '0 6px 25px rgba(232, 201, 109, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCutCake}
              >
                🔪 Cake Kaato!!
              </motion.button>
            </>
          )}

          {phase === 2 && (
            <>
              <motion.h3
                style={{ fontFamily: "Cormorant Garamond, serif", fontSize: '1.875rem', color: '#e8c96d', textShadow: '0 0 20px rgba(232,201,109,0.8), 0 0 40px rgba(232,201,109,0.4)', marginBottom: '1rem', position: 'relative', zIndex: 10 }}
                animate={{
                  color: ['#e8c96d', '#f4788a', '#fdf4e7', '#e8c96d'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                Happy Birthday Shree!! 🎂✨
              </motion.h3>
              <motion.button
                style={{ fontFamily: "DM Sans, sans-serif", marginTop: '1rem', padding: '0.75rem 2rem', borderRadius: '9999px', color: '#e8c96d', border: '2px solid rgba(232,201,109,0.5)', cursor: 'pointer', transition: 'all 0.3s', background: 'transparent', boxShadow: '0 4px 15px rgba(232, 201, 109, 0.2)', position: 'relative', zIndex: 10 }}
                onClick={handleNext}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(232,201,109,0.15)', boxShadow: '0 6px 25px rgba(232, 201, 109, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                Next 💛
              </motion.button>
            </>
          )}

          {/* Cake SVG */}
          {phase === 1 && (
            <motion.div
              style={{ marginTop: '2rem', position: 'relative' }}
              animate={cutting ? { scale: 1.1 } : {}}
              transition={{ duration: 0.3 }}
            >
              <svg width="200" height="180" viewBox="0 0 200 180" style={{ margin: '0 auto' }}>
                {/* Bottom Tier */}
                <motion.rect
                  x="30" y="100" width="140" height="70" rx="5"
                  fill="#e8c96d"
                  animate={cutting ? { x: [30, 10] } : {}}
                  transition={{ duration: 0.5 }}
                />
                <motion.rect
                  x="30" y="100" width="140" height="70" rx="5"
                  fill="#f4788a"
                  animate={cutting ? { x: [30, 50] } : {}}
                  transition={{ duration: 0.5 }}
                  opacity="0.5"
                />
                
                {/* Middle Tier */}
                <motion.rect
                  x="50" y="60" width="100" height="45" rx="5"
                  fill="#fdf4e7"
                  animate={cutting ? { x: [50, 35] } : {}}
                  transition={{ duration: 0.5 }}
                />
                <motion.rect
                  x="50" y="60" width="100" height="45" rx="5"
                  fill="#e8c96d"
                  animate={cutting ? { x: [50, 65] } : {}}
                  transition={{ duration: 0.5 }}
                  opacity="0.5"
                />
                
                {/* Top Tier */}
                <motion.rect
                  x="70" y="35" width="60" height="30" rx="5"
                  fill="#f4788a"
                  animate={cutting ? { x: [70, 55] } : {}}
                  transition={{ duration: 0.5 }}
                />
                <motion.rect
                  x="70" y="35" width="60" height="30" rx="5"
                  fill="#fdf4e7"
                  animate={cutting ? { x: [70, 85] } : {}}
                  transition={{ duration: 0.5 }}
                  opacity="0.5"
                />
                
                {/* Candles */}
                {[0, 1, 2].map((i) => (
                  <g key={i}>
                    <motion.rect
                      x={85 + i * 15} y="15" width="4" height="20"
                      fill="#e8c96d"
                      animate={cutting ? { x: [85 + i * 15, 70 + i * 15] } : {}}
                      transition={{ duration: 0.5 }}
                    />
                    <motion.ellipse
                      cx={87 + i * 15} cy="12" rx="3" ry="6"
                      fill="#ffa500"
                      animate={{
                        scaleY: [1, 1.3, 1],
                        opacity: [1, 0.7, 1],
                      }}
                      transition={{
                        duration: 0.3,
                        repeat: Infinity,
                      }}
                    />
                  </g>
                ))}

                {/* Cutting Line */}
                {cutting && (
                  <motion.line
                    x1="100" y1="35"
                    x2="100" y2="170"
                    stroke="#fdf4e7"
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8 }}
                  />
                )}
              </svg>
            </motion.div>
          )}

          {/* Celebration Effects */}
          {celebrating && (
            <>
              {celebrationConfetti.map((c) => (
                <motion.div
                  key={c.id}
                  style={{ position: 'absolute', width: 8, height: 8, borderRadius: '50%', backgroundColor: c.color, pointerEvents: 'none' }}
                  initial={{ x: '50%', y: '50%' }}
                  animate={{
                    x: `calc(50% + ${c.vx}vw)`,
                    y: `calc(50% + ${c.vy}vh)`,
                  }}
                  transition={{
                    duration: 1.5,
                    delay: c.delay,
                    ease: 'easeOut',
                  }}
                />
              ))}

              {celebrationBalloons.map((b) => (
                <motion.div
                  key={b.id}
                  style={{ position: 'absolute', fontSize: '1.875rem', left: `${b.x}%`, pointerEvents: 'none' }}
                  animate={{
                    y: [window.innerHeight, -100],
                  }}
                  transition={{
                    duration: 6,
                    delay: b.delay,
                    ease: 'linear',
                  }}
                >
                  🎈
                </motion.div>
              ))}

              <motion.div
                style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
                animate={{
                  background: [
                    'rgba(232,201,109,0)',
                    'rgba(232,201,109,0.2)',
                    'rgba(244,120,138,0.2)',
                    'rgba(232,201,109,0)',
                  ],
                }}
                transition={{
                  duration: 1,
                  ease: 'easeInOut',
                }}
              />
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CakeCutModal;
