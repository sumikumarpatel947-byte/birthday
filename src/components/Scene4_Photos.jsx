import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Scene4_Photos = ({ onAdvance }) => {
  const [revealedCount, setRevealedCount] = useState(0);
  const [currentView, setCurrentView] = useState(null);

  const photos = [
    {
      src: "/photos/photo1.jpeg",
      label: "💛 Humara Pehla Safar",
      shayari: "Raahon mein saath chalna tha,\nPata na tha woh pal bhi yaadgaar banega..."
    },
    {
      src: "/photos/photo2.jpeg",
      label: "🌸 Ek Rang, Do Dil",
      shayari: "Peele rang mein lipte hum dono,\nJaise ek hi khwaab ke do hisse ho..."
    },
    {
      src: "/photos/photo3.jpeg",
      label: "🌙 Raat Ki Baatein",
      shayari: "Neend kahan, jab tum yaad aao,\nHar video call ek khwaab sa lagti thi..."
    },
    {
      src: "/photos/photo4.jpeg",
      label: "🐾 Hamare Cute Jaanwar 😂",
      shayari: "Filter chahe koi bhi ho,\nTumhari muskaan sabse pyaari lagti hai..."
    },
    {
      src: "/photos/photo5.jpeg",
      label: "💌 Dil Se Dil Tak",
      shayari: "Haath se dil bana ke tumne,\nMera dil bhi jeeta tha ussi pal..."
    },
    {
      src: "/photos/photo6.jpeg",
      label: "🏛️ Mandir Ki Yaad",
      shayari: "Mandir ki seedhon par baithe hum,\nShayad ishwar ne hi milaaya tha..."
    },
    {
      src: "/photos/photo7.jpeg",
      label: "🎀 Tumhara Natkhat Andaaz",
      shayari: "Pink bows mein tum aur bhi cute lagte ho,\nKuch cheezein kehne ki zaroorat nahi hoti..."
    },
    {
      src: "/photos/photo8.jpeg",
      label: "🌼 Khule Aasman Ke Neeche",
      shayari: "Phoolon se sajke ham mile the,\nWoh shaam aaj bhi mehekti hai..."
    }
  ];

  const handleUnlock = (index) => {
    setRevealedCount(index + 1);
    setCurrentView(index);
  };

  const handlePhotoClick = (index) => {
    setCurrentView(index);
  };

  const handleCloseView = () => {
    setCurrentView(null);
  };

  const handleNextOrFinish = () => {
    handleCloseView();
    if (currentView === photos.length - 1) {
      setTimeout(() => onAdvance(), 500);
    }
  };

  const currentPhoto = currentView !== null ? photos[currentView] : null;

  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#070714', overflow: 'hidden', padding: '1rem' }}>
      {!currentView && (
        <>
          <motion.h2
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', color: '#fdf4e7', textAlign: 'center', marginBottom: '2rem' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Kuch Yaadein Hain... Ek Ek Karke Dekhoge? 📸
          </motion.h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', maxWidth: '900px' }}>
            {photos.slice(0, revealedCount).map((photo, index) => (
              <motion.button
                key={index}
                style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(16px)', border: '1px solid rgba(232,201,109,0.3)', borderRadius: '1rem', padding: '1rem', textAlign: 'center', cursor: 'pointer', transition: 'all 0.3s', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)' }}
                onClick={() => handlePhotoClick(index)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', damping: 15, stiffness: 100 }}
                whileHover={{ scale: 1.08, boxShadow: '0 8px 30px rgba(232, 201, 109, 0.3)', background: 'rgba(255,255,255,0.1)' }}
              >
                <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: '0.875rem', color: '#fdf4e7' }}>{photo.label}</span>
              </motion.button>
            ))}

            {revealedCount < photos.length && (
              <motion.button
                style={{ background: 'linear-gradient(135deg, #e8c96d 0%, #f4788a 100%)', backdropFilter: 'blur(12px)', border: '1px solid rgba(232,201,109,0.5)', borderRadius: '1rem', padding: '1rem 1.5rem', textAlign: 'center', cursor: 'pointer', transition: 'all 0.3s', boxShadow: '0 4px 15px rgba(232, 201, 109, 0.3)' }}
                onClick={() => handleUnlock(revealedCount)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', damping: 15, stiffness: 100 }}
                whileHover={{ scale: 1.1, boxShadow: '0 6px 25px rgba(232, 201, 109, 0.5)' }}
              >
                <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: '0.875rem', color: '#070714', fontWeight: 600 }}>
                  ✨ Agla Pal Dekhna Hai...
                </span>
              </motion.button>
            )}
          </div>
        </>
      )}

      <AnimatePresence>
        {currentPhoto && (
          <motion.div
            style={{ position: 'fixed', inset: 0, zIndex: 50, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(7,7,20,0.95)', padding: '1rem' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              style={{ position: 'relative', maxWidth: '32rem', width: '100%' }}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <motion.div
                style={{ position: 'absolute', top: '-1rem', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'rgba(232, 201, 109, 0.95)', color: '#070714', padding: '0.375rem 1.25rem', borderRadius: '9999px', fontFamily: "DM Sans, sans-serif", fontSize: '0.875rem', fontWeight: 600, boxShadow: '0 4px 20px rgba(232, 201, 109, 0.4)' }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {currentPhoto.label}
              </motion.div>

              <img
                src={currentPhoto.src}
                alt={currentPhoto.label}
                style={{ width: '100%', maxHeight: '60vh', objectFit: 'cover', borderRadius: '1.25rem', border: '2px solid rgba(232,201,109,0.4)', boxShadow: '0 20px 60px rgba(0,0,0,0.4)' }}
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="#0f0f2a"/><text x="200" y="150" text-anchor="middle" fill="#e8c96d" font-size="20">Photo Loading...</text></svg>');
                }}
              />

              <motion.p
                style={{ fontFamily: "Tiro Devanagari Hindi, serif", fontSize: '1.125rem', color: '#fdf4e7', fontStyle: 'italic', textAlign: 'center', marginTop: '1.5rem', lineHeight: 1.75, background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(12px)', padding: '1rem', borderRadius: '1rem', border: '1px solid rgba(232,201,109,0.2)' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                {currentPhoto.shayari.split('\n').map((line, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.2 }}
                  >
                    {line}
                    <br />
                  </motion.span>
                ))}
              </motion.p>

              <motion.button
                style={{ fontFamily: "DM Sans, sans-serif", marginTop: '1.5rem', marginLeft: 'auto', marginRight: 'auto', display: 'block', padding: '0.75rem 2rem', borderRadius: '9999px', color: '#e8c96d', border: '2px solid rgba(232,201,109,0.5)', cursor: 'pointer', transition: 'all 0.3s', background: 'transparent', boxShadow: '0 4px 15px rgba(232, 201, 109, 0.2)' }}
                onClick={handleNextOrFinish}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(232,201,109,0.15)', boxShadow: '0 6px 25px rgba(232, 201, 109, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                {currentView === photos.length - 1 ? 'Ab kya? 💛' : 'Aur Dekhna Hai ➡️'}
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Scene4_Photos;
