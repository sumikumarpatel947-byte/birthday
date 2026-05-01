import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Scene7_Ending = ({ onReset }) => {
  const [showLine1, setShowLine1] = useState(false);
  const [showLine2, setShowLine2] = useState(false);
  const [fadeToBlack, setFadeToBlack] = useState(false);
  const [showFinal, setShowFinal] = useState(false);
  const [showReset, setShowReset] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowLine1(true), 2000);
    const timer2 = setTimeout(() => setShowLine2(true), 4000);
    const timer3 = setTimeout(() => setFadeToBlack(true), 6000);
    const timer4 = setTimeout(() => setShowFinal(true), 7000);
    const timer5 = setTimeout(() => setShowReset(true), 8000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, []);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#070714', overflow: 'hidden' }}>
      {/* Final Photo */}
      <motion.div
        style={{ position: 'absolute', inset: 0, zIndex: 1 }}
        initial={{ scale: 1, opacity: 0 }}
        animate={{ scale: fadeToBlack ? 1.05 : 1, opacity: 1 }}
        transition={{ duration: 8 }}
      >
        <img
          src="/photos/photo_final.jpeg"
          alt="Shree"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onError={(e) => {
            console.error('Final photo failed to load');
            e.target.style.display = 'none';
          }}
          onLoad={() => {
            console.log('Final photo loaded successfully');
          }}
        />, zIndex: 2
      </motion.div>

      {/* Vignette */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), transparent, rgba(0,0,0,0.6))' }} />

      {/* Text Overlay */}
      <AnimatePresence>
        {!fadeToBlack && (
          <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 1rem' }}>
            <AnimatePresence>
              {showLine1 && (
                <motion.p
                  style={{ fontFamily: "Cormorant Garamond, serif", fontSize: '2rem', color: '#e8c96d', textShadow: '0 0 20px rgba(232,201,109,0.8), 0 0 40px rgba(232,201,109,0.4)', marginBottom: '1rem' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  Naam likha diya tha...
                </motion.p>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {showLine2 && (
                <motion.p
                  style={{ fontFamily: "Cormorant Garamond, serif", fontSize: '2rem', color: '#f4788a', textShadow: '0 0 20px rgba(244,120,138,0.8), 0 0 40px rgba(244,120,138,0.3)' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  Betaa jii... 💛
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        )}
      </AnimatePresence>

      {/* Fade to Black */}
      <AnimatePresence>
        {fadeToBlack && (
          <motion.div
            style={{ position: 'absolute', inset: 0, backgroundColor: 'black', zIndex: 20 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <AnimatePresence>
              {showFinal && (
                <motion.div
                  style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <motion.h1
                    style={{ fontFamily: "Cormorant Garamond, serif", fontSize: '2.5rem', color: '#fdf4e7', marginBottom: '2rem', textAlign: 'center', lineHeight: 1.4 }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  >
                    Happy Birthday Shree!! 🌸
                  </motion.h1>
                  <motion.p
                    style={{ fontFamily: "Tiro Devanagari Hindi, serif", fontSize: '1.125rem', color: '#fdf4e7', lineHeight: 2, textAlign: 'center', maxWidth: '800px', background: 'rgba(0,0,0,0.6)', padding: '2rem', borderRadius: '1rem' }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    Bhagwan ji tumhe hamesha khush rakhe, kabhi koi bhi tumhe dikkat na ho. Aur hum apne ko bohot bhagyashali samajhte h ki hamne vo pehla message kiya tumko. Hum bas yahi chahte h ki apn dono ka sath hamesha bana rhe. Forever tum hamari dost raho.
                    <br /><br />
                    Dil se hamne tumse accha, tumse jyada soft-dil ka insan nhi dekha. Tum humko bohot pyar karti ho aur hum bhi tumko. But as bestfriend samjhii jyada khayali pulaav mat pakaya karo.
                    <br /><br />
                    LOVE YOU ALOT 💛
                    <br /><br />
                    Tumhara yeh birthday bohot accha jaye aur Shree ji ki kripa tumpe bani rahe. Aur jald se jald apn sath me Vrindavan chle.
                  </motion.p>

                  <AnimatePresence>
                    {showReset && (
                      <motion.button
                        style={{ fontFamily: "DM Sans, sans-serif", marginTop: '3rem', padding: '0.75rem 2rem', borderRadius: '9999px', color: '#e8c96d', border: '2px solid rgba(232,201,109,0.5)', cursor: 'pointer', transition: 'all 0.3s', background: 'transparent', fontSize: '0.875rem', boxShadow: '0 4px 15px rgba(232, 201, 109, 0.2)' }}
                        onClick={onReset}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(232,201,109,0.15)', boxShadow: '0 6px 25px rgba(232, 201, 109, 0.4)' }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Phir Se Dekhna Hai 🔄
                      </motion.button>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Scene7_Ending;
