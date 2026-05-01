import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Scene5_Birthday = ({ onOpenCake }) => {
  const [showElements, setShowElements] = useState(false);

  useEffect(() => {
    setShowElements(true);
  }, []);

  const getAge = (dob) => {
    const today = new Date();
    const birth = new Date(dob);
    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    if (months < 0) { years--; months += 12; }
    if (today.getDate() < birth.getDate()) months--;
    if (months < 0) { years--; months += 11; }
    return { years, months };
  };

  const age = getAge('2007-05-02');
  const today = new Date();
  const isBirthday = today.getMonth() === 4 && today.getDate() === 2;

  const confettiColors = ['#e8c96d', '#f4788a', '#fdf4e7', '#ffffff', '#ffb6c1', '#ffa500'];

  const confetti = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
    delay: Math.random() * 2,
    duration: Math.random() * 2 + 2,
    rotation: Math.random() * 360,
  }));

  const fireworks = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    x: Math.random() * 80 + 10,
    y: Math.random() * 60 + 20,
    delay: i * 0.3,
  }));

  const balloons = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    x: i < 3 ? Math.random() * 30 : Math.random() * 30 + 70,
    delay: Math.random() * 2,
  }));

  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#070714', overflow: 'hidden' }}>
      {/* Confetti */}
      {showElements && confetti.map((c) => (
        <motion.div
          key={c.id}
          style={{ position: 'absolute', width: 8, height: 8, borderRadius: '50%', left: `${c.x}%`, backgroundColor: c.color }}
          animate={{
            y: [-20, window.innerHeight + 100],
            rotate: [0, c.rotation],
          }}
          transition={{
            duration: c.duration,
            repeat: Infinity,
            delay: c.delay,
            ease: 'linear',
          }}
        />
      ))}

      {/* Fireworks */}
      {showElements && fireworks.map((f) => (
        <motion.div
          key={f.id}
          style={{ position: 'absolute', borderRadius: '50%', left: `${f.x}%`, top: `${f.y}%`, width: 100, height: 100, background: 'radial-gradient(circle, rgba(232,201,109,0.8) 0%, transparent 70%)' }}
          animate={{
            scale: [0, 3],
            opacity: [1, 0],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: f.delay,
            repeatDelay: 2,
          }}
        />
      ))}

      {/* Balloons */}
      {showElements && balloons.map((b) => (
        <motion.div
          key={b.id}
          style={{ position: 'absolute', fontSize: '2.25rem', left: `${b.x}%` }}
          animate={{
            y: [window.innerHeight + 100, -100],
            x: [0, Math.random() * 40 - 20],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: b.delay,
            ease: 'linear',
          }}
        >
          🎈
        </motion.div>
      ))}

      {/* Birthday Content */}
      <div style={{ textAlign: 'center', zIndex: 10, padding: '0 1rem' }}>
        <motion.div
          style={{ fontSize: '3.75rem', marginBottom: '1rem' }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', damping: 10, stiffness: 100, delay: 0.2 }}
        >
          🎂
        </motion.div>

        <motion.h1
          style={{ fontFamily: "Cormorant Garamond, serif", fontSize: '3rem', color: '#e8c96d', letterSpacing: '0.1em', textShadow: '0 0 20px rgba(232,201,109,0.8), 0 0 40px rgba(232,201,109,0.4)', marginBottom: '1rem' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Happy Birthday
        </motion.h1>

        <motion.h2
          style={{ fontFamily: "Cormorant Garamond, serif", fontSize: '2.5rem', color: '#f4788a', textShadow: '0 0 20px rgba(244,120,138,0.8), 0 0 40px rgba(244,120,138,0.3)', marginBottom: '2rem' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Shree!! 🌸
        </motion.h2>

        <motion.p
          style={{ fontFamily: "Tiro Devanagari Hindi, serif", fontSize: '1.25rem', color: '#fdf4e7', marginBottom: '2rem' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Aaj tum {age.years} saal ki ho gayi ho! 🌟
          {isBirthday && (
            <span style={{ display: 'block', marginTop: '0.5rem', color: '#e8c96d' }}>
              Aur aaj tumhara janamdin hai! 🎉🎉
            </span>
          )}
        </motion.p>

        <motion.button
          style={{ fontFamily: "DM Sans, sans-serif", padding: '1rem 2.5rem', borderRadius: '9999px', fontSize: '1.125rem', fontWeight: 600, color: '#070714', background: 'linear-gradient(135deg, #e8c96d 0%, #f4788a 100%)', backgroundSize: '200%', cursor: 'pointer', border: 'none', boxShadow: '0 4px 15px rgba(232, 201, 109, 0.3)', position: 'relative', overflow: 'hidden' }}
          whileHover={{ scale: 1.05, boxShadow: '0 6px 25px rgba(232, 201, 109, 0.5)' }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpenCake}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          🎂 Cake Kaatni Hai??
        </motion.button>
      </div>
    </div>
  );
};

export default Scene5_Birthday;
