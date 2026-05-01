import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Scene6_Message = ({ onAdvance }) => {
  const [typedText, setTypedText] = useState('');
  const [showButton, setShowButton] = useState(false);

  const message = `Tum ek khushi ho jo alfaazon mein nahi samaati...
 
 Har pal mein, har lamhe mein,
 bas tumhara chehra dikhta hai.
 
 Aaj tumhara din hai — sirf tumhara. 💛
 
 Duniya bhar ki khushiyan ho tumhare paas,
 aur yeh dil hamesha tumhara saath de.
 
 Janam din mubarak ho, meri Shree. 🌸`;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < message.length) {
        setTypedText(message.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => setShowButton(true), 1000);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const hearts = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 5,
    emoji: ['❤️', '💛', '🌸'][Math.floor(Math.random() * 3)],
  }));

  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#070714', overflow: 'hidden', padding: '1rem' }}>
      {/* Floating Hearts */}
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          style={{ position: 'absolute', fontSize: '1.5rem', left: `${heart.x}%` }}
          animate={{
            y: [window.innerHeight + 100, -100],
            x: [0, Math.random() * 40 - 20],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: heart.delay,
            ease: 'linear',
          }}
        >
          {heart.emoji}
        </motion.div>
      ))}

      {/* Title */}
      <motion.h2
        style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', color: '#e8c96d', textShadow: '0 0 20px rgba(232,201,109,0.8), 0 0 40px rgba(232,201,109,0.4)', marginBottom: '2rem' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Tumhare Liye...
      </motion.h2>

      {/* Typewriter Message */}
      <motion.div
        style={{ maxWidth: '42rem', textAlign: 'center' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <p style={{ fontFamily: "'Tiro Devanagari Hindi', serif", fontSize: '1.25rem', color: '#fdf4e7', lineHeight: 2, whiteSpace: 'pre-line' }}>
          {typedText}
          <motion.span
            style={{ display: 'inline-block', width: 2, height: 24, backgroundColor: '#e8c96d', marginLeft: 4 }}
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          />
        </p>
      </motion.div>

      {/* Next Button */}
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
          Ek Aakhri Cheez Hai... 🌟
        </motion.button>
      )}
    </div>
  );
};

export default Scene6_Message;
