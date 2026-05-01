import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Scene2_Question = ({ onAdvance }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [buttonsVisible, setButtonsVisible] = useState(false);

  const handleNoClick = () => {
    setShowTooltip(true);
    setTimeout(() => {
      onAdvance();
    }, 1500);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#070714', overflow: 'hidden' }}>
      {/* Animated Gradient Blob */}
      <motion.div
        style={{ position: 'absolute', inset: 0, opacity: 0.15 }}
        animate={{
          background: [
            'radial-gradient(circle at 30% 50%, rgba(232,201,109,0.4) 0%, transparent 50%)',
            'radial-gradient(circle at 70% 50%, rgba(244,120,138,0.4) 0%, transparent 50%)',
            'radial-gradient(circle at 30% 50%, rgba(232,201,109,0.4) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Emoji */}
      <motion.div
        style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', damping: 10, stiffness: 100 }}
      >
        🤔
      </motion.div>

      {/* Question Text */}
      <motion.h2
        style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.5rem', color: '#fdf4e7', textAlign: 'center', marginBottom: '3rem' }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Aaj kuch special hai??
      </motion.h2>

      {/* Buttons */}
      <motion.div
        style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <motion.button
          style={{ fontFamily: "DM Sans, sans-serif", padding: '1rem 2.5rem', borderRadius: '9999px', fontSize: '1.125rem', fontWeight: 600, color: '#070714', background: 'linear-gradient(135deg, #e8c96d 0%, #f4788a 100%)', backgroundSize: '200%', cursor: 'pointer', border: 'none', boxShadow: '0 4px 15px rgba(232, 201, 109, 0.3)', position: 'relative', overflow: 'hidden' }}
          whileHover={{ scale: 1.05, boxShadow: '0 6px 25px rgba(232, 201, 109, 0.5)' }}
          whileTap={{ scale: 0.95 }}
          onClick={onAdvance}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          Haan, bilkul! 😊
        </motion.button>

        <div style={{ position: 'relative' }}>
          <motion.button
            style={{ fontFamily: "DM Sans, sans-serif", padding: '1rem 2.5rem', borderRadius: '9999px', fontSize: '1.125rem', fontWeight: 600, color: '#070714', background: 'linear-gradient(135deg, #e8c96d 0%, #f4788a 100%)', backgroundSize: '200%', cursor: 'pointer', border: 'none', boxShadow: '0 4px 15px rgba(232, 201, 109, 0.3)', position: 'relative', overflow: 'hidden' }}
            whileHover={{ scale: 1.05, boxShadow: '0 6px 25px rgba(232, 201, 109, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNoClick}
            animate={showTooltip ? { x: [-10, 10, -10, 10, 0] } : { opacity: 1, y: 0 }}
            transition={showTooltip ? { duration: 0.5 } : { delay: 1, duration: 0.5 }}
            initial={{ opacity: 0, y: 20 }}
          >
            Nahi toh... 🤷
          </motion.button>

          <AnimatePresence>
            {showTooltip && (
              <motion.div
                style={{ position: 'absolute', top: '-3.5rem', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'rgba(15, 15, 42, 0.95)', padding: '0.75rem 1.25rem', borderRadius: '0.75rem', color: '#fdf4e7', fontSize: '0.875rem', whiteSpace: 'nowrap', background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)', border: '1px solid rgba(232,201,109,0.3)', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)' }}
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                Jhooth mat bolo 😄
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default Scene2_Question;
