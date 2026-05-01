import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Scene3_Tease = ({ onAdvance }) => {
  const [shake, setShake] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const shakeTimer = setTimeout(() => setShake(true), 2000);
    const buttonTimer = setTimeout(() => setShowButton(true), 2500);
    return () => {
      clearTimeout(shakeTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#070714', overflow: 'hidden' }}>
      {/* Text */}
      <motion.h2
        style={{ fontFamily: "Cormorant Garamond, serif", fontSize: '2rem', color: '#fdf4e7', textAlign: 'center', marginBottom: '3rem', padding: '0 1rem' }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Dekho... tumhare liye kuch banaya hai 💝
      </motion.h2>

      {/* Gift Box */}
      <motion.div
        style={{ position: 'relative' }}
        animate={{
          y: shake ? [-10, 10, -10, 10, 0] : [-10, 10],
          rotate: shake ? [0, -5, 5, -5, 5, 0] : 0,
        }}
        transition={{
          y: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          },
          rotate: {
            duration: 0.5,
            ease: 'easeInOut',
          },
        }}
      >
        <svg width="200" height="200" viewBox="0 0 200 200" style={{ filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.25))' }}>
          {/* Box */}
          <rect x="20" y="60" width="160" height="120" rx="8" fill="#e8c96d" />
          <rect x="20" y="60" width="160" height="120" rx="8" fill="url(#goldGradient)" opacity="0.3" />
          
          {/* Lid */}
          <rect x="10" y="40" width="180" height="30" rx="5" fill="#f4788a" />
          <rect x="10" y="40" width="180" height="30" rx="5" fill="url(#roseGradient)" opacity="0.3" />
          
          {/* Ribbon Vertical */}
          <rect x="90" y="40" width="20" height="140" fill="#fdf4e7" />
          
          {/* Ribbon Horizontal */}
          <rect x="10" y="70" width="180" height="20" fill="#fdf4e7" />
          
          {/* Bow */}
          <ellipse cx="100" cy="30" rx="30" ry="15" fill="#fdf4e7" />
          <ellipse cx="70" cy="25" rx="20" ry="12" fill="#fdf4e7" />
          <ellipse cx="130" cy="25" rx="20" ry="12" fill="#fdf4e7" />
          
          {/* Gradients */}
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e8c96d" />
              <stop offset="100%" stopColor="#f4788a" />
            </linearGradient>
            <linearGradient id="roseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f4788a" />
              <stop offset="100%" stopColor="#e8c96d" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Button */}
      {showButton && (
        <motion.button
          style={{ fontFamily: "DM Sans, sans-serif", marginTop: '3rem', padding: '1rem 2.5rem', borderRadius: '9999px', fontSize: '1.125rem', fontWeight: 600, color: '#070714', background: 'linear-gradient(135deg, #e8c96d 0%, #f4788a 100%)', backgroundSize: '200%', cursor: 'pointer', border: 'none', boxShadow: '0 4px 15px rgba(232, 201, 109, 0.3)', position: 'relative', overflow: 'hidden' }}
          whileHover={{ scale: 1.05, boxShadow: '0 6px 25px rgba(232, 201, 109, 0.5)' }}
          whileTap={{ scale: 0.95 }}
          onClick={onAdvance}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Kholna Chahogi? 🎁
        </motion.button>
      )}
    </div>
  );
};

export default Scene3_Tease;
